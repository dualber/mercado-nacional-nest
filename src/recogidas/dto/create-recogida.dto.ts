import { IsDateString, IsInt, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateRecogidaDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  @Min(0)
  anio: number;

  @IsInt()
  @Min(1)
  mes: number;

  @IsInt()
  @Min(1)
  semana: number;

  @IsInt()
  @Min(1)
  dia: number;

  @IsString()
  placa_vehiculo: string;

  @IsNumber()
  @Min(0)
  cantidad_total: number;

  @IsUUID()
  id_persona: string;
}
