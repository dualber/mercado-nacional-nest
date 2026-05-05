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
        pago_total: 0.0,
      },
    });
  }

  //llamamos a todas las compras con sus detalles
  async findAll() {
    const compras = await this.prisma.compras.findMany({
      include: {
        detalles: true,
      },
    });

    //construir el payload para la respuesta
    return compras.map((compra) => ({
      id: compra.id,
      fecha: compra.fecha,
      cantidad_total: compra.detalles.reduce(
        (acc, detalle) => acc + detalle.cantidad,
        0,
      ),
      pago_total: compra.detalles.reduce(
        (acc, detalle) => acc + Number.parseFloat(detalle.subtotal.toString()),
        0,
      ),
      detalles: compra.detalles,
    }));
  }

  async findOne(id: string) {
    return await this.prisma.compras.findUnique({ where: { id } });
  }

  async update(id: string, updateCompraDto: UpdateCompraDto) {
    return await this.prisma.compras.update({
      data: updateCompraDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.compras.delete({ where: { id } });
  }
}
