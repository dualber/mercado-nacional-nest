import { CreateDetalleRecogidaDto } from './create-detalle-recogida.dto';
import { IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateDetalleRecogidaDto {
  @IsOptional()
  @IsUUID()
  id_finca?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  cantidad?: number;

  @IsOptional()
  @IsUUID()
  id_recogida?: string;

  @IsOptional()
  @IsUUID()
  id_producto?: string;
}
