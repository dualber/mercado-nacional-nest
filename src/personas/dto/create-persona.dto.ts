import { IsEmail, IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

export class CreatePersonaDto {
  @IsString({ message: 'La cédula debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La cédula es obligatoria' })
  cedula: string;

  @IsString({ message: 'Los nombres deben ser una cadena de texto' })
  @IsNotEmpty({ message: 'Los nombres son obligatorios' })
  nombres: string;

  @IsString({ message: 'Los apellidos deben ser una cadena de texto' })
  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  apellidos: string;

  @IsString({ message: 'El contacto debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El contacto es obligatorio' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto: string;

  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  @IsOptional()
  correo: string;
}
