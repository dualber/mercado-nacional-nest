import { CreateCompraDto } from './create-compra.dto';
import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class UpdateCompraDto {
  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsUUID()
  @IsString()
  id_grupo?: string;
}
