import { CreateGrupoDto } from './create-grupo.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class UpdateGrupoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  tipo_cuenta?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  numero_cuenta?: number;
}
