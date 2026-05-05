import { CreateFincaDto } from './create-finca.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateFincaDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ibm?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsOptional()
  contacto?:string;

  @IsOptional()
  @IsUUID()
  id_grupo?: string;

  @IsOptional()
  @IsUUID()
  id_comunal?: string;
}
