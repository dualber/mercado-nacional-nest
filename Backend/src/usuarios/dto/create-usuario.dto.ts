import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'El username debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El username es obligatorio' })
  username: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El estado es obligatorio' })
  estado: string;

  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona: string;
}
