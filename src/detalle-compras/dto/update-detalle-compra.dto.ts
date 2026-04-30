import { CreateDetalleCompraDto } from './create-detalle-compra.dto';
import { IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateDetalleCompraDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  cantidad?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  precio?: number;

  @IsOptional()
  @IsUUID()
  id_producto?: string;

  @IsOptional()
  @IsUUID()
  id_compra?: string;
}
