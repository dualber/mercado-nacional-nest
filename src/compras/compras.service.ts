import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDetalleCompraDto } from 'src/detalle-compras/dto/create-detalle-compra.dto';

@Injectable()
export class ComprasService {
  constructor(private prisma: PrismaService) {}
  async create(createCompraDto: CreateCompraDto) {
    return this.prisma.compras.create({
      data:{
        fecha: new Date(createCompraDto.fecha),
        grupo: {
          connect:{
            id: createCompraDto.id_grupo
          }
        },
      cantidad_total: 0 //traer las cantidades de las compras y sumarlas
      }
    });
  }

async contarCantidades(){
      const detalles = await this.prisma.detalleCompras.findMany();
      return detalles;
  }

findAll() {
    return this.prisma.compras.findMany();
  }

findOne(id: string) {
    return this.prisma.compras.findUnique({where: {id}});
  }

 update(id: string, updateCompraDto: UpdateCompraDto) {
    return this.prisma.compras.update({ data: updateCompraDto,where: {id}});
  }

remove(id: string) {
    return this.prisma.compras.delete({where:{id}});
  }
}
