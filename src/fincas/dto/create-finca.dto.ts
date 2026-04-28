import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateFincaDto {
  @IsString()
  @IsNotEmpty()
  ibm: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsUUID()
  id_grupo: string;

  @IsUUID()
  id_comunales: string;
}
