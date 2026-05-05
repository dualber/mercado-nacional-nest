import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MIN, Min } from 'class-validator';

export class CreateGrupoDto {
  @IsString()
  @IsOptional()
  @Min(8)
  nit: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Min(10)
  contacto:string;

  @IsString()
  @IsEmail()
  @IsOptional()
  correo:string;

  @IsString()
  @IsNotEmpty()
  tipo_cuenta: string;

  @IsInt()
  @Min(10)
  numero_cuenta: number;
}
