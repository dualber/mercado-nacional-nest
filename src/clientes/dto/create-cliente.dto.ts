import { IsNotEmpty, IsString, IsInt, Matches, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'La cédula debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'La cédula solo debe contener números' })
  cedula: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Los nombres deben tener al menos 3 caracteres' })
  nombres: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Los apellidos deben tener al menos 3 caracteres' })
  apellidos: string;

 
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El contacto debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto: string;

  @IsString()
  @IsNotEmpty()
  tipo_cuenta: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El numero de cuenta debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El numero de cuenta solo debe contener números' })
  numero_cuenta: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;
}
