import { IsDateString, IsInt, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateRecogidaDto {
  @IsDateString()
  fecha: string;

  @IsString()
  placa_vehiculo: string;


  @IsUUID()
  id_persona: string;
}
