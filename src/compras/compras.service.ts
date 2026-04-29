import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComprasService {
  constructor(private prisma: PrismaService) {}
  create(createCompraDto: CreateCompraDto) {
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
    return `This action removes a #${id} compra`;
  }
}
