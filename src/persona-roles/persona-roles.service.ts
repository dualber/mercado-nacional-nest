import { Injectable } from '@nestjs/common';
import { CreatePersonaRoleDto } from './dto/create-persona-role.dto';
import { UpdatePersonaRoleDto } from './dto/update-persona-role.dto';

@Injectable()
export class PersonaRolesService {
  async create(createPersonaRoleDto: CreatePersonaRoleDto) {
    return await 'This action adds a new personaRole';
  }

  async findAll() {
    return await `This action returns all personaRoles`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} personaRole`;
  }

  async update(id: number, updatePersonaRoleDto: UpdatePersonaRoleDto) {
    return await `This action updates a #${id} personaRole`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} personaRole`;
  }
}
