import { IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateDetalleRecogidaDto {
  @IsUUID()
  id_finca: string;

  @IsNumber()
  @Min(0)
  cantidad: number;

  @IsUUID()
  id_recogida: string;

  @IsUUID()
  id_producto: string;
}
