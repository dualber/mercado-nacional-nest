import { Injectable } from '@nestjs/common';
import { CreateComunaleDto } from './dto/create-comunale.dto';
import { UpdateComunaleDto } from './dto/update-comunale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComunalesService {
  constructor(private prisma: PrismaService) {}
  async create(createComunaleDto: CreateComunaleDto) {
    return await this.prisma.comunales.create({data: createComunaleDto});
  }

  async findAll() {
    return await this.prisma.comunales.findMany();
  } 

  async findOne(id: string) {
    return await this.prisma.comunales.findUnique({where: {id}});
  }

  async update(id: string, updateComunaleDto: UpdateComunaleDto) {
    return await this.prisma.comunales.update({where: {id}, data: updateComunaleDto});
  }

  async remove(id: string) {
    return await this.prisma.comunales.delete({where: {id}});
  }
}
