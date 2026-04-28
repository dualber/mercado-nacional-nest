import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  contacto: string;

  @IsString()
  @IsNotEmpty()
  tipo_cuenta: string;

  @IsString()
  @IsNotEmpty()
  numero_cuenta: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;
}
