import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VentasService {
  constructor(private prisma: PrismaService) {}
  async create(createVentaDto: CreateVentaDto) {
    return await this.prisma.ventas.create({ 
      data:{
        fecha:new Date(createVentaDto.fecha),
        cliente:{
          connect:{
            id:createVentaDto.id_cliente
          }
        },
        cantidad_total: 0,
      } });
  }

  async findAll() {
    const ventas = await this.prisma.ventas.findMany({
      include:{
        cliente:true,
        detalles:{
          include:{
            producto:true,
          }
        }
      }
    });

    return ventas.map((venta) =>({
      id:venta.id,
      fecha:venta.fecha,
      cliente:venta.cliente.nombres + " " + venta.cliente.apellidos,
      cantidad_total: venta.detalles.reduce((acc, detalle) => acc + detalle.cantidad,0),
      pago_total: venta.detalles.reduce((acc, detalle) => acc + Number.parseFloat(detalle.subtotal.toString()),0),

      detalles:venta.detalles.map((detalle) => ({
        producto:detalle.producto.nombre,
        cantidad:detalle.cantidad,
        precio:detalle.precio,
        subtotal:detalle.subtotal
      }))
    }))


  }

  async findOne(id: string) {
    const ventas = await this.prisma.ventas.findUnique({
      where:{id},
      include:{
        cliente:true,
        detalles:{
          include:{
            producto:true,
          }
        }
      }
    });

    return {
      id:ventas.id,
      fecha:ventas.fecha,
      cliente:ventas.cliente.nombres + " " + ventas.cliente.apellidos,
      cantidad_total: ventas.detalles.reduce((acc, detalle) => acc + detalle.cantidad,0),
      pago_total: ventas.detalles.reduce((acc, detalle) => acc + Number.parseFloat(detalle.subtotal.toString()),0),

      detalles:ventas.detalles.map((detalle) => ({
        producto:detalle.producto.nombre,
        cantidad:detalle.cantidad,
        precio:detalle.precio,
        subtotal:detalle.subtotal
      }))
    }
  }

  async update(id: string, updateVentaDto: UpdateVentaDto) {
    return await this.prisma.ventas.update({data: updateVentaDto, where:{id}});
  }

  async remove(id: string) {
    return await this.prisma.ventas.delete({where:{id}});
  }
}
