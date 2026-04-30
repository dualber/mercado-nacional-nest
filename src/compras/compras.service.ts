import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  async findAll() {
    return this.prisma.compras.findMany();
  }

  async findOne(id: string) {
    return this.prisma.compras.findUnique({where: {id}});
  }

  async update(id: string, updateCompraDto: UpdateCompraDto) {
    return this.prisma.compras.update({ data: updateCompraDto,where: {id}});
  }

  async remove(id: string) {
    return this.prisma.compras.delete({where:{id}});
  }
}
