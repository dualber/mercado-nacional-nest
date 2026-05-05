import { CreateDetalleVentaDto } from './create-detalle-venta.dto';
import { IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateDetalleVentaDto {
  @IsOptional()
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(0, { message: 'La cantidad debe ser mayor o igual a 0' })
  cantidad?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número con máximo 2 decimales' })
  @Min(0, { message: 'El precio debe ser mayor o igual a 0' })
  precio?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El subtotal debe ser un número con máximo 2 decimales' })
  @Min(0, { message: 'El subtotal debe ser mayor o igual a 0' })
  subtotal?: number;

  @IsOptional()
  @IsUUID('4', { message: 'El id del producto debe ser un UUID válido' })
  id_producto?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la venta debe ser un UUID válido' })
  id_venta?: string;
}
