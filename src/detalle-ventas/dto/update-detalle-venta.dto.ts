import { CreateDetalleVentaDto } from './create-detalle-venta.dto';
import { IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateDetalleVentaDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  cantidad?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  subtotal?: number;

  @IsOptional()
  @IsUUID()
  id_producto?: string;

  @IsOptional()
  @IsUUID()
  id_venta?: string;
}
