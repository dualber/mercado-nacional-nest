import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length, Min, MinLength, Matches } from 'class-validator';

export class CreateGrupoDto {
  @IsString()
  @IsOptional()
  @Length(8, 15)
  @Matches(/^[0-9]+$/, { message: 'El NIT solo debe contener números' })
  nit: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre: string;

  @IsString()
  @MinLength(10)
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  correo: string;

  @IsString()
  @IsNotEmpty()
  tipo_cuenta: string;

  @IsString()
  @MinLength(10)
  @Matches(/^[0-9]+$/, { message: 'El numero de cuenta solo debe contener números' })
  numero_cuenta: string;
}
