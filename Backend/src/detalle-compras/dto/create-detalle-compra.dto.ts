import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateDetalleCompraDto {
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(1, { message: 'La cantidad debe ser mayor o igual a 1' })
  cantidad: number;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número con máximo 2 decimales' })
  @Min(1, { message: 'El precio debe ser mayor o igual a 1' })
  precio: number;

  @IsUUID('4', { message: 'El id del producto debe ser un UUID válido' })
  id_producto: string;

  @IsUUID('4', { message: 'El id de la compra debe ser un UUID válido' })
  id_compra: string;
}
