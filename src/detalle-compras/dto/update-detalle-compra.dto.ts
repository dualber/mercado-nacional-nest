import { CreateDetalleCompraDto } from './create-detalle-compra.dto';
import { IsNumber, IsOptional, IsUUID, Min, IsInt } from 'class-validator';

export class UpdateDetalleCompraDto {
  @IsOptional()
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(1, { message: 'La cantidad debe ser mayor o igual a 1' })
  cantidad?: number;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'El precio debe ser mayor o igual a 1' })
  precio?: number;

  @IsOptional()
  @IsUUID('4', { message: 'El id del producto debe ser un UUID válido' })
  id_producto?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la compra debe ser un UUID válido' })
  id_compra?: string;
}
