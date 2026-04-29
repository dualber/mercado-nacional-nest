import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cedula?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombres?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  apellidos?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  contacto?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  tipo_cuenta?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  numero_cuenta?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ciudad?: string;
}
