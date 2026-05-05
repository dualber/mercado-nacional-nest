import { CreatePersonaDto } from './create-persona.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

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
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;
}
