import { CreatePersonaDto } from './create-persona.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class UpdatePersonaDto {
  @IsOptional()
  @MinLength(8,{message:'la cedula a ingresar debe tener minimo 8 digitos'})
  @Matches(/^[0-9]+$/, { message: 'la cedula solo debe contener números' })
  cedula?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Los nombres son obligatorios' })
  @Matches(/^[aA-zZ]+$/, { message: 'El nombre solo debe contener letras' })
  nombres?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  @Matches(/^[aA-zZ]+$/, { message: 'El apellido solo debe contener letras' })
  apellidos?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  correo?: string;
}
