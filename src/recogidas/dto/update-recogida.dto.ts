import { CreateRecogidaDto } from './create-recogida.dto';
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateRecogidaDto {
  @IsOptional()
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha?: string;

  @IsOptional()
  @IsString({ message: 'La placa del vehículo debe ser una cadena de texto' })
  placa_vehiculo?: string;

  @IsOptional()
  @IsNumber({}, { message: 'La cantidad total debe ser un número' })
  @Min(0, { message: 'La cantidad total debe ser mayor o igual a 0' })
  cantidad_total?: number;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona?: string;
}
