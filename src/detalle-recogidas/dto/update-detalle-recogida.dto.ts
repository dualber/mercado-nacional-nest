import { CreateDetalleRecogidaDto } from './create-detalle-recogida.dto';
import { IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateDetalleRecogidaDto {
  @IsOptional()
  @IsUUID('4', { message: 'El id de la finca debe ser un UUID válido' })
  id_finca?: string;

  @IsOptional()
  @IsNumber({}, { message: 'La cantidad debe ser un número' })
  @Min(0, { message: 'La cantidad debe ser mayor o igual a 0' })
  cantidad?: number;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la recogida debe ser un UUID válido' })
  id_recogida?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id del producto debe ser un UUID válido' })
  id_producto?: string;
}
