import { CreateVehiculoDto } from './create-vehiculo.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateVehiculoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  placa?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  marca?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descipcion?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  capacidad?: number;
}
