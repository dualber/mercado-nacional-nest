import { Injectable } from '@nestjs/common';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class DetalleComprasService {
  constructor(private prisma: PrismaService){}

  create(createDetalleCompraDto: CreateDetalleCompraDto) {
    return this.prisma.detalleCompras.create({
      data:{
        cantidad:createDetalleCompraDto.cantidad,
        precio:createDetalleCompraDto.precio,
        producto:{
          connect:{
            id:createDetalleCompraDto.id_producto,
          }
        },
        compra:{
          connect:{
            id:createDetalleCompraDto.id_compra,
          }
        },
        subtotal: createDetalleCompraDto.cantidad * createDetalleCompraDto.precio
      }
    });
    
  }

  findAll() {
    return this.prisma.detalleCompras.findMany();
  }

  findOne(id: string) {
    return this.prisma.detalleCompras.findUnique({where:{id}});
  }

  update(id: string, updateDetalleCompraDto: UpdateDetalleCompraDto) {
    return this.prisma.detalleCompras.update({data:{
      ...updateDetalleCompraDto,
      subtotal:updateDetalleCompraDto.cantidad * updateDetalleCompraDto.precio,},
       where:{id}});
  }

  remove(id: string) {
    return this.prisma.detalleCompras.delete({
      where:{id}
    });
  }
}
