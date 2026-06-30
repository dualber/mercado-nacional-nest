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
      const roles = await this.prisma.roles.findMany({
      include:{
        personas:{
          include:{
            persona:true,
          }
        }
      }
    });

    return roles.map((roles) => ({
      id:roles.id_rol,
      nombre:roles.nombre,
      personas:roles.personas.map((persona) => ({
        nombre:persona.persona.nombres,
        apellido:persona.persona.apellidos
      }))
    }))


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
