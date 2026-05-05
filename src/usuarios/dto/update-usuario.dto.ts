import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString({ message: 'El username debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El username no puede estar vacío' })
  username?: string;

  @IsOptional()
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El estado no puede estar vacío' })
  estado?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona?: string;
}
