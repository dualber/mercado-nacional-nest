import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateDetalleCompraDto {
  @IsNumber()
  @Min(0)
  cantidad: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  subtotal: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio: number;

  @IsUUID()
  id_productos: string;

  @IsUUID()
  id_compra: string;
}
