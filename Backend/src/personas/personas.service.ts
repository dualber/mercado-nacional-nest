import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonasService {
  constructor(private prisma: PrismaService) {}
  async create(createPersonaDto: CreatePersonaDto) {
    return await this.prisma.personas.create({ data: createPersonaDto });
  }

  async findAll() {
    const personas = await this.prisma.personas.findMany({
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });

    return personas.map((persona) => ({
      id: persona.id,
      cedula: persona.cedula,
      nombres: persona.nombres,
      apellidos: persona.apellidos,
      contacto: persona.contacto,
      correo: persona.correo,
      rol: persona.roles
        .map((r) => (
           r.rol.nombre))
        .join(),
    }));
  }

  async findOne(id: string) {
    const persona = await this.prisma.personas.findUnique({
      where: { id },
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });

    return {
      cedula: persona.cedula,
      nombres: persona.nombres,
      apellidos: persona.apellidos,
      contacto: persona.contacto,
      correo: persona.correo,
      rol: persona.roles.map((r) => r.rol.nombre).join(),
    };
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    return await this.prisma.personas.update({
      data: updatePersonaDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.personas.delete({ where: { id } });
  }
}
