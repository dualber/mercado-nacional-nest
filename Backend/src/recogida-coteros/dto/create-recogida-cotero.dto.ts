import { IsUUID } from 'class-validator';

export class CreateRecogidaCoteroDto {
  @IsUUID('4', { message: 'El id de la recogida debe ser un UUID válido' })
  id_recogida: string;

  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona: string;
}
