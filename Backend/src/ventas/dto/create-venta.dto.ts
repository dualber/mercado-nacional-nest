import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateVentaDto {
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha: string;

  @IsUUID('4', { message: 'El id del cliente debe ser un UUID válido' })
  id_cliente: string;
}
