import { IsEmail, IsNotEmpty, IsString, IsOptional, Matches, MinLength } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty({ message: 'La cédula es obligatoria' })
  @MinLength(8,{message:'la cedula a ingresar debe tener minimo 8 digitos'})
  @Matches(/^[0-9]+$/, { message: 'la cedula solo debe contener números' })
  cedula: string;

  @IsString()
  @IsNotEmpty({ message: 'Los nombres son obligatorios' })
  @Matches(/^[aA-zZ]+$/, { message: 'El nombre solo debe contener letras' })
  nombres: string;

  @IsString()
  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  @Matches(/^[aA-zZ]+$/, { message: 'El apellido solo debe contener letras' })
  apellidos: string;

  @IsString({ message: 'El contacto debe ser una cadena de texto' })
  @IsNotEmpty()
  @MinLength(10, {message: 'el contacto debe contener minimo 10 digitos'})
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto: string;

  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  @IsOptional()
  correo: string;
}
