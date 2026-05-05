import { CreatePersonaDto } from './create-persona.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class UpdatePersonaDto {
  @IsOptional()
  @IsString({ message: 'La cédula debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La cédula no puede estar vacía' })
  cedula?: string;

  @IsOptional()
  @IsString({ message: 'Los nombres deben ser una cadena de texto' })
  @IsNotEmpty({ message: 'Los nombres no pueden estar vacíos' })
  nombres?: string;

  @IsOptional()
  @IsString({ message: 'Los apellidos deben ser una cadena de texto' })
  @IsNotEmpty({ message: 'Los apellidos no pueden estar vacíos' })
  apellidos?: string;

  @IsOptional()
  @IsString({ message: 'El contacto debe ser una cadena de texto' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  correo?: string;
}
