import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsString()
  @IsOptional()
  cedula: string;

  @IsString()
  @IsOptional()
  nombres: string;

  @IsString()
  @IsOptional()
  apellidos: string;

  @IsString()
  @IsOptional()
  contacto: string;

  @IsString()
  @IsOptional()
  tipo_cuenta: string;

  @IsString()
  @IsOptional()
  numero_cuenta: string;

  @IsString()
  @IsOptional()
  ciudad: string;
}
