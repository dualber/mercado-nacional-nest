import { Injectable } from '@nestjs/common';
import { CreateFincaDto } from './dto/create-finca.dto';
import { UpdateFincaDto } from './dto/update-finca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FincasService {
  constructor(private prisma: PrismaService) {}
  async create(createFincaDto: CreateFincaDto) {
    return await this.prisma.fincas.create({
      data: createFincaDto,
    });
  }

  async findAll() {
    const fincas = await this.prisma.fincas.findMany({
      include: {
        grupo: true,
        comunal: true,
      },
    });

    return fincas.map((finca) => ({
      id: finca.id,
      ibm: finca.ibm,
      nombre: finca.nombre,
      contacto: finca.contacto,
      grupo: finca.grupo.nombre,
      comunal: finca.comunal.nombre,
    }));
  }

  async findOne(id: string) {
    const finca = await this.prisma.fincas.findUnique({
      where: { id },
      include: {
        grupo: true,
        comunal: true,
      },
    });

    return {
      ibm: finca.ibm,
      nombre: finca.nombre,
      contacto: finca.contacto,
      grupo: finca.grupo.nombre,
      comunal: finca.comunal.nombre,
    };
  }

  async update(id: string, updateFincaDto: UpdateFincaDto) {
    return await this.prisma.fincas.update({
      where: { id },
      data: updateFincaDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.fincas.delete({ where: { id } });
  }
}
