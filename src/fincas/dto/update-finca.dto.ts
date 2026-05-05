import { CreateFincaDto } from './create-finca.dto';
import {IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MinLength } from 'class-validator';

export class UpdateFincaDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ibm?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'El nombre debe tener entre 3 y 50 caracteres' })
  nombre?: string;

  @IsString()
  @IsOptional()
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto?:string;

  @IsOptional()
  @IsUUID()
  id_grupo?: string;

  @IsOptional()
  @IsUUID()
  id_comunal?: string;
}
