import { IsDateString, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateCompraDto {
  @IsDateString({}, { message: 'La fecha debe tener un formato de fecha válido' })
  fecha: string;

  @IsUUID('4', { message: 'El id del grupo debe ser un UUID válido' })
  @IsString({ message: 'El id del grupo debe ser una cadena de texto' })
  id_grupo: string;
}
