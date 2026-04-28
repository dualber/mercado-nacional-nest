import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateCompraDto {
  @IsDateString()
  fecha: string;

  @IsNumber()
  @Min(0)
  cantidad_total: number;

  @IsUUID()
  id_grupo: string;
}
