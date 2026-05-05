import { Injectable } from '@nestjs/common';
import { CreatePersonaRoleDto } from './dto/create-persona-role.dto';
import { UpdatePersonaRoleDto } from './dto/update-persona-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonaRolesService {
  constructor(private prisma: PrismaService){}
  async create(createPersonaRoleDto: CreatePersonaRoleDto) {
    return await this.prisma.personaRoles.create({ data: createPersonaRoleDto });
  }

  async findAll() {
    return await this.prisma.personaRoles.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.personaRoles.findUnique({ where: { id_persona_id_rol: { id_persona: id, id_rol: id } } });
  }

  async update(id: string, updatePersonaRoleDto: UpdatePersonaRoleDto) {
    return await this.prisma.personaRoles.update({ data: updatePersonaRoleDto, where: { id_persona_id_rol: { id_persona: id, id_rol: id } } });
  }

  async remove(id: string) {
    return await this.prisma.personaRoles.delete({ where: { id_persona_id_rol: { id_persona: id, id_rol: id } } });
  }
}
