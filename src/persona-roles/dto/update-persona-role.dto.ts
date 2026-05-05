import { CreatePersonaRoleDto } from './create-persona-role.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdatePersonaRoleDto {
  @IsOptional()
  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  id_persona?: string;

  @IsOptional()
  @IsUUID('4', { message: 'El id del rol debe ser un UUID válido' })
  id_rol?: string;
}
