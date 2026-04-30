import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDetalleCompraDto } from 'src/detalle-compras/dto/create-detalle-compra.dto';

@Injectable()
export class ComprasService {
  constructor(private prisma: PrismaService) {}
  async create(createCompraDto: CreateCompraDto) {
    return await this.prisma.compras.create({
      data: {
        fecha: new Date(createCompraDto.fecha),
        grupo: {
          connect: {
            id: createCompraDto.id_grupo,
          },
        },
        cantidad_total: 0, 
      },
    });
  }

  async contarCantidades() {
    const detalles = await this.prisma.detalleCompras.findMany();
    const cantidad_total = detalles.reduce((acc,d) => acc + d.cantidad, 0)
    console.log(cantidad_total)
    return Number(cantidad_total);
  }

  async findAll() {
    return await this.prisma.compras.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.compras.findUnique({ where: { id } });
  }

  async update(id: string, updateCompraDto: UpdateCompraDto) {
    return await this.prisma.compras.update({ data: updateCompraDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.compras.delete({ where: { id } });
  }
}
