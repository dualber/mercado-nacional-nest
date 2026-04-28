import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  contacto: string;

  @IsEmail()
  correo: string;
}
