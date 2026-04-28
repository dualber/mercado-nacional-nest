import { IsUUID } from 'class-validator';

export class CreatePersonaRoleDto {
  @IsUUID()
  id_persona: string;

  @IsUUID()
  id_rol: string;
}
