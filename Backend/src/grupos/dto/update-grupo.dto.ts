import { CreateGrupoDto } from './create-grupo.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, Length, IsEmail, Matches, MinLength } from 'class-validator';

export class UpdateGrupoDto {

  @IsOptional()
  @IsString()
  @Length(8, 15, { message: 'El NIT debe tener entre 8 y 15 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El nit solo debe contener números' })
  nit?: string;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre?: string;

  @IsString()
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  correo?: string;

  @IsOptional()
  @IsString()
  tipo_cuenta?: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'El numero de cuenta debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El numero de cuenta solo debe contener números' })
  numero_cuenta?: string;
}
