import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateVentaDto {
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha: string;

  @IsNumber({}, { message: 'La cantidad total debe ser un número' })
  @Min(0, { message: 'La cantidad total debe ser mayor o igual a 0' })
  cantidad_total: number;

  @IsUUID('4', { message: 'El id del cliente debe ser un UUID válido' })
  id_cliente: string;
}
