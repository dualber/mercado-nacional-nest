import { CreateRecogidaCoteroDto } from './create-recogida-cotero.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateRecogidaCoteroDto {
  @IsOptional()
  @IsUUID('4', { message: 'El id de la recogida debe ser un UUID válido' })
  id_recogida?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona?: string;
}
