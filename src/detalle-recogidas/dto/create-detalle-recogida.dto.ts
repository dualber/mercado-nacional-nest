import { IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateDetalleRecogidaDto {
  @IsUUID('4', { message: 'El id de la finca debe ser un UUID válido' })
  id_finca: string;

  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(0, { message: 'La cantidad debe ser mayor o igual a 0' })
  cantidad: number;

  @IsUUID('4', { message: 'El id de la recogida debe ser un UUID válido' })
  id_recogida: string;

  @IsUUID('4', { message: 'El id del producto debe ser un UUID válido' })
  id_producto: string;
}
