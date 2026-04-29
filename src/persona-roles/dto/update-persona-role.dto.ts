import { CreatePersonaRoleDto } from './create-persona-role.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdatePersonaRoleDto {
  @IsOptional()
  @IsUUID()
  id_persona?: string;

  @IsOptional()
  @IsUUID()
  id_rol?: string;
}
