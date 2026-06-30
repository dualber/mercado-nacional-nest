import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GruposService {
  constructor(private prisma:PrismaService){}
  async create(createGrupoDto: CreateGrupoDto) {
    return await this.prisma.grupos.create({
      data: createGrupoDto,
    });
  }

  async findAll() {
    return await this.prisma.grupos.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.grupos.findUnique({where:{id}});
  }

  async update(id: string, updateGrupoDto: UpdateGrupoDto) {
    return await this.prisma.grupos.update({
      data:updateGrupoDto,
      where:{id}
    });
  }

  async remove(id: string) {
    return await this.prisma.grupos.delete({where:{id}});
  }
}
