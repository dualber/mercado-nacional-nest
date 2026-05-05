import { IsEmail, IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

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
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto: string;

  @IsEmail()
  @IsOptional()
  correo: string;
}
