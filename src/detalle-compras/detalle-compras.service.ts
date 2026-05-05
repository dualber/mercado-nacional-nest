import { Injectable } from '@nestjs/common';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Producto } from 'src/productos/entities/producto.entity';


@Injectable()
export class DetalleComprasService {
  constructor(private prisma: PrismaService){}

  async create(createDetalleCompraDto: CreateDetalleCompraDto) {
    const crear = await this.prisma.detalleCompras.create({
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

    await this.actualizarCantidadTotal(createDetalleCompraDto.id_compra);
    await this.actualizarPagoTotal(createDetalleCompraDto.id_compra);
    return crear;
    
  }

  async actualizarCantidadTotal(idCompra: string){

    const detalles = await this.prisma.detalleCompras.findMany({
      where:{id_compra:idCompra}
    });

    const total = detalles.reduce((suma,d) => suma + d.cantidad, 0) 

      return this.prisma.compras.update({
      where:{id:idCompra},
      data:{cantidad_total: total}
     })
  }

  async actualizarPagoTotal(idCompra: string){
    const detalles = await this.prisma.detalleCompras.findMany({
      where:{id_compra:idCompra}
    });
    const total = detalles.reduce((suma, d) => suma + Number.parseFloat(d.subtotal.toString()), 0);
    console.log(total);
    return this.prisma.compras.update({
      where:{id:idCompra},
      data:{pago_total: total}
    })
  }

  async findAll() {
      const detalles = await this.prisma.detalleCompras.findMany({
      include:{
        producto: true,
        compra:true,
      }
    });

    return detalles.map((detalle) =>({
      id:detalle.id,
      producto:detalle.producto.nombre,
      cantidad:detalle.cantidad,
      precio:detalle.precio,
      subtotal:detalle.subtotal,
    }))
  }

  async findOne(id: string) {
    return await this.prisma.detalleCompras.findUnique({where:{id}});
  }

  async update(id: string, updateDetalleCompraDto: UpdateDetalleCompraDto) {
    const actualizar = await this.prisma.detalleCompras.update({data:{
      ...updateDetalleCompraDto,
      subtotal:updateDetalleCompraDto.cantidad * updateDetalleCompraDto.precio,},
      where:{id}});
    
      await this.actualizarCantidadTotal(updateDetalleCompraDto.id_compra);
      await this.actualizarPagoTotal(updateDetalleCompraDto.id_compra);
      return actualizar;


  }

 async remove(id: string) {
    const eliminar = await this.prisma.detalleCompras.delete({
      where:{id}
    });

    await this.actualizarCantidadTotal(eliminar.id_compra)
    await this.actualizarPagoTotal(eliminar.id_compra)
    return eliminar;

  }
}
