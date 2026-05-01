import { Injectable } from '@nestjs/common';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecogidasService {
  constructor(private prisma: PrismaService){}
  async create(createRecogidaDto: CreateRecogidaDto) {
    return await this.prisma.recogidas.create({
      data: {
        fecha: createRecogidaDto.fecha,
        cantidad_total: 0,
        persona: {
          connect: {
            id: createRecogidaDto.id_persona,
          },
        },
        vehiculo: {
          connect: {
            placa: createRecogidaDto.placa_vehiculo,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.recogidas.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.recogidas.findUnique({ where: { id } });
  }

  async update(id: string, updateRecogidaDto: UpdateRecogidaDto) {
    return await this.prisma.recogidas.update({ data: updateRecogidaDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.recogidas.delete({ where: { id } });
  }
}
