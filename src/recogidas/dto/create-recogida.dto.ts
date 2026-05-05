import { IsDateString, IsInt, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateRecogidaDto {
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha: string;

  @IsString({ message: 'La placa del vehículo debe ser una cadena de texto' })
  placa_vehiculo: string;


  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona: string;
}
