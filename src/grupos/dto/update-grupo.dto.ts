import { CreateGrupoDto } from './create-grupo.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class UpdateGrupoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  tipo_cuenta?: string;

  @IsOptional()
  @IsInt()
  @Min(10)
  numero_cuenta?: number;
}
