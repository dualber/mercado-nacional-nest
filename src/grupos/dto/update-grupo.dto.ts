import { CreateGrupoDto } from './create-grupo.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min, IsEmail } from 'class-validator';

export class UpdateGrupoDto {

  @IsOptional()
  @IsString()
  nit?: string;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @Min(10)
  contacto:string;

  @IsString()
  @IsEmail()
  @IsOptional()
  correo:string;

  @IsOptional()
  @IsString()
  tipo_cuenta?: string;

  @IsOptional()
  @IsInt()
  @Min(10)
  numero_cuenta?: number;
}
