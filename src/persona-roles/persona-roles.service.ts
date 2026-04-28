import { Injectable } from '@nestjs/common';
import { CreatePersonaRoleDto } from './dto/create-persona-role.dto';
import { UpdatePersonaRoleDto } from './dto/update-persona-role.dto';

@Injectable()
export class PersonaRolesService {
  create(createPersonaRoleDto: CreatePersonaRoleDto) {
    return 'This action adds a new personaRole';
  }

  findAll() {
    return `This action returns all personaRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaRole`;
  }

  update(id: number, updatePersonaRoleDto: UpdatePersonaRoleDto) {
    return `This action updates a #${id} personaRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaRole`;
  }
}
