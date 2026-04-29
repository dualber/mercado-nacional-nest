import { CreateVentaDto } from './create-venta.dto';
import { IsDateString, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateVentaDto {
  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  cantidad_total?: number;

  @IsOptional()
  @IsUUID()
  id_cliente?: string;
}
