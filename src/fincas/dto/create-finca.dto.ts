import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateFincaDto {
  @IsString()
  @IsNotEmpty()
  ibm: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  contacto:string;

  @IsUUID()
  id_grupo: string;

  @IsUUID()
  id_comunal: string;
}
