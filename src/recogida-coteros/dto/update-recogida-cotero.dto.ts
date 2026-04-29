import { CreateRecogidaCoteroDto } from './create-recogida-cotero.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateRecogidaCoteroDto {
  @IsOptional()
  @IsUUID()
  id_recogida?: string;

  @IsOptional()
  @IsUUID()
  id_persona?: string;
}
