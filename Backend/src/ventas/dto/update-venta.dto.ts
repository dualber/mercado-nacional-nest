import { CreateVentaDto } from './create-venta.dto';
import { IsDateString, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateVentaDto {
  @IsOptional()
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha?: string;

  @IsOptional()
  @IsNumber({}, { message: 'La cantidad total debe ser un número' })
  @Min(0, { message: 'La cantidad total debe ser mayor o igual a 0' })
  cantidad_total?: number;

  @IsOptional()
  @IsUUID('4', { message: 'El id del cliente debe ser un UUID válido' })
  id_cliente?: string;
}
