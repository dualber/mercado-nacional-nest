import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaRoleDto } from './create-persona-role.dto';

export class UpdatePersonaRoleDto extends PartialType(CreatePersonaRoleDto) {}
