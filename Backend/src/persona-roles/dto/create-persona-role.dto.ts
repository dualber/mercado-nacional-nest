import { IsUUID } from 'class-validator';

export class CreatePersonaRoleDto {
  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona: string;

  @IsUUID('4', { message: 'El id del rol debe ser un UUID válido' })
  id_rol: string;
}
