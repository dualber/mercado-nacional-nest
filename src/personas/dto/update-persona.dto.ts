import { CreatePersonaDto } from './create-persona.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePersonaDto {
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
  @IsEmail()
  correo?: string;
}
