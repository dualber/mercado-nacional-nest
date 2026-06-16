import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsOptional, IsString, MinLength, Matches, IsEmail } from 'class-validator';

export class UpdateClienteDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'La cédula debe tener al menos 8 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'La cédula solo debe contener números' })
  cedula?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Los nombres deben tener al menos 3 caracteres' })
  nombres?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Los apellidos deben tener al menos 3 caracteres' })
  apellidos?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El contacto debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?: string;

  @IsString()
  @IsEmail({},{message:'el formato de correo es ivalido, ingresa un correo valido'})
  @IsOptional()
  correo:string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  tipo_cuenta?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El numero de cuenta debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El numero de cuenta solo debe contener números' })
  numero_cuenta?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ciudad?: string;
}
