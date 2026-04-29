import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateDetalleCompraDto {
  @IsNumber()
  @Min(1)
  cantidad: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  subtotal: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  precio: number;

  @IsUUID()
  id_productos: string;

  @IsUUID()
  id_compra: string;
}
