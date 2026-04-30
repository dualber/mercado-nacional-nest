import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Compras } from '@prisma/client';


@Injectable()
export class ProductosService {
  constructor(private prisma:PrismaService){}
  async create(createProductoDto: CreateProductoDto) {
    return this.prisma.productos.create({
      data:createProductoDto,
    });
  }

  async findAll() {
    return this.prisma.productos.findMany();
  }

  async findOne(id: string) {
    return this.prisma.productos.findUnique({where:{id}});
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    return this.prisma.productos.update({
      data:UpdateProductoDto,
      where:{id},
    });
  }

  async remove(id: string) {
    return this.prisma.productos.delete({where:{id}});
  }
}
