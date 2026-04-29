import { Injectable } from '@nestjs/common';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class DetalleComprasService {
  constructor(private prisma: PrismaService){}

  async create(createDetalleCompraDto: CreateDetalleCompraDto) {
    return this.prisma.detalleCompras.create({
      data:{
        cantidad:createDetalleCompraDto.cantidad,
        precio:createDetalleCompraDto.precio,
        producto:{
          connect:{
            id:createDetalleCompraDto.id_productos,
          }
        },
        compra:{
          connect:{
            id:createDetalleCompraDto.id_productos,
          }
        },
        subtotal: createDetalleCompraDto.cantidad *createDetalleCompraDto.precio
      }
    });
    console.log(createDetalleCompraDto.cantidad *createDetalleCompraDto.precio)
  }

  async findAll() {
    return this.prisma.detalleCompras.findMany();
  }

  async findOne(id: string) {
    return this.prisma.detalleCompras.findUnique({where:{id}});
  }

  async update(id: string, updateDetalleCompraDto: UpdateDetalleCompraDto) {
    return this.prisma.detalleCompras.update({data:updateDetalleCompraDto,where:{id}});
  }

  async remove(id: string) {
    return this.prisma.detalleCompras.delete({
      where:{id}
    });
  }
}
