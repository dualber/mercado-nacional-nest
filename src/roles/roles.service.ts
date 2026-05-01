import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService){}
  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.roles.create({ data: createRoleDto })  ;
  }

  async findAll() {
    return await this.prisma.roles.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.roles.findUnique({ where: {id_rol:id} });
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return await this.prisma.roles.update({ data: updateRoleDto, where: { id_rol: id } });
  }

  async remove(id: string) {
    return await this.prisma.roles.delete({ where: { id_rol: id } });
  }
}
