import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';

@Catch()
export class PrismaClientExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno del servidor';
    let error = 'INTERNAL_ERROR';

    // 🔥 1. Manejo específico de Prisma
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = 'El registro que intentas modificar no existe';
          error = 'NOT_FOUND';
          break;

        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `Ya existe un registro con ese valor único`;
          error = 'UNIQUE_CONSTRAINT';
          break;

        case 'P2003':
          status = HttpStatus.BAD_REQUEST;
          message = 'Relación inválida entre registros (foreign key)';
          error = 'FOREIGN_KEY_ERROR';
          break;

        default:
          status = HttpStatus.BAD_REQUEST;
          message = 'Error en la base de datos';
          error = exception.code;
      }
    }

    // 🔥 2. Manejo de errores HTTP de NestJS
    else if (exception instanceof HttpException) {
      status = exception.getStatus();

      const exceptionResponse = exception.getResponse();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : (exceptionResponse as any).message || exception.message;

      error = 'HTTP_EXCEPTION';
    }

    // 🔥 3. Otros errores
    else {
      console.error('Error no controlado:', exception);
    }

    // 🎯 Respuesta estándar profesional
    response.status(status).json({
      statusCode: status,
      message,
      error,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}