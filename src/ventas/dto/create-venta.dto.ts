import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateVentaDto {
  @IsDateString()
  fecha: string;

  @IsNumber()
  @Min(0)
  cantidad_total: number;

  @IsUUID()
  id_cliente: string;
}
