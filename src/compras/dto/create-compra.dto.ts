import { IsDateString, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateCompraDto {
  @IsDateString()
  fecha: string;

  @IsUUID()
  @IsString()
  id_grupo: string;
}
