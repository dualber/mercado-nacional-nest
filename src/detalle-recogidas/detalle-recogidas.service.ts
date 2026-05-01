import { Injectable } from '@nestjs/common';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetalleRecogidasService {
  constructor(private prisma: PrismaService){}
  async create(createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return await this.prisma.detalleRecogidas.create({
      data: createDetalleRecogidaDto,
    });
  }

  async findAll() {
    return await this.prisma.detalleRecogidas.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.detalleRecogidas.findUnique({ where: { id } });
  }

  async update(id: string, updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return await this.prisma.detalleRecogidas.update({ data: updateDetalleRecogidaDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.detalleRecogidas.delete({ where: { id } });
  }
}
