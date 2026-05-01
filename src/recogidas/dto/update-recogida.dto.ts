import { CreateRecogidaDto } from './create-recogida.dto';
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateRecogidaDto {
  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsString()
  placa_vehiculo?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  cantidad_total?: number;

  @IsOptional()
  @IsUUID()
  id_persona?: string;
}
