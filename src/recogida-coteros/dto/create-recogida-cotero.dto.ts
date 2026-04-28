import { IsUUID } from 'class-validator';

export class CreateRecogidaCoteroDto {
  @IsUUID()
  id_recogida: string;

  @IsUUID()
  id_persona: string;
}
