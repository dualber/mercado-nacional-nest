import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateDetalleVentaDto {
  @IsNumber()
  @Min(0)
  cantidad: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  subtotal: number;

  @IsUUID()
  id_producto: string;

  @IsUUID()
  id_venta: string;
}
