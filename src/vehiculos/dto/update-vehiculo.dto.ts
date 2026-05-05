import { CreateVehiculoDto } from './create-vehiculo.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateVehiculoDto {
  @IsOptional()
  @IsString({ message: 'La placa debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La placa no puede estar vacía' })
  placa?: string;

  @IsOptional()
  @IsString({ message: 'La marca debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La marca no puede estar vacía' })
  marca?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía' })
  descipcion?: string;

  @IsOptional()
  @IsNumber({}, { message: 'La capacidad debe ser un número' })
  @Min(0, { message: 'La capacidad debe ser mayor o igual a 0' })
  capacidad?: number;
}
