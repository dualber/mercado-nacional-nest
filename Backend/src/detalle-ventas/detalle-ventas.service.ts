import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetalleVentasService {
  constructor(private prisma: PrismaService) {}
  async create(createDetalleVentaDto: CreateDetalleVentaDto) {
    return await this.prisma.detalleVentas.create({
      data: {
        venta: {
          connect: {
            id: createDetalleVentaDto.id_venta,
          },
        },
        producto: {
          connect: {
            id: createDetalleVentaDto.id_producto,
          },
        },
        cantidad: createDetalleVentaDto.cantidad,
        precio: createDetalleVentaDto.precio,
        subtotal: createDetalleVentaDto.precio * createDetalleVentaDto.cantidad,
      },
    });
  }



  async findAll() {
    const Dventa = await this.prisma.detalleVentas.findMany({
      include: {
        producto: true,
      },
    });

    return Dventa.map((dventa) => ({
      id: dventa.id,
      id_producto: dventa.id_producto,
      producto: dventa.producto.nombre,
      cantidad: dventa.cantidad,
      precio: dventa.precio,
      subtotal: dventa.subtotal,
    }));
  }

  async findOne(id: string) {
    const Dventa = await this.prisma.detalleVentas.findUnique({
      where: { id },
      include: {
        producto: true,
      },
    });

    return{
      id: Dventa.id,
      id_producto: Dventa.id_producto,
      producto: Dventa.producto.nombre,
      cantidad: Dventa.cantidad,
      precio: Dventa.precio,
      subtotal: Dventa.subtotal,
    }


  }

  async update(id: string, updateDetalleVentaDto: UpdateDetalleVentaDto) {
    return await this.prisma.detalleVentas.update({
      data: {
        venta: {
          connect: {
            id: updateDetalleVentaDto.id_venta,
          },
        },
        producto: {
          connect: {
            id: updateDetalleVentaDto.id_producto,
          },
        },
        cantidad: updateDetalleVentaDto.cantidad,
        precio: updateDetalleVentaDto.precio,
        subtotal: updateDetalleVentaDto.precio * updateDetalleVentaDto.cantidad,
      },
       where:{id}});
  }

  async remove(id: string) {
    return await this.prisma.detalleVentas.delete({where:{id}});
  }
}
