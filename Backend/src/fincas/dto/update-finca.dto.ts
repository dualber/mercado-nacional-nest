import { CreateFincaDto } from './create-finca.dto';
import {IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MinLength } from 'class-validator';

export class UpdateFincaDto {
  @IsOptional()
  @IsString({ message: 'El IBM debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El IBM no puede estar vacío' })
  ibm?: string;

  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(3, { message: 'El nombre debe tener entre 3 y 50 caracteres' })
  nombre?: string;

  @IsString({ message: 'El contacto debe ser una cadena de texto' })
  @IsOptional()
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?:string;

  @IsOptional()
  @IsUUID('4', { message: 'El id del grupo debe ser un UUID válido' })
  id_grupo?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la comunal debe ser un UUID válido' })
  id_comunal?: string;
}
