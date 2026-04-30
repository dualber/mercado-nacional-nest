import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GruposService {
  constructor(private prisma:PrismaService){}
  create(createGrupoDto: CreateGrupoDto) {
    return this.prisma.grupos.create({
      data:createGrupoDto,
    });
  }

  findAll() {
    return this.prisma.grupos.findMany();
  }

  findOne(id: string) {
    return this.prisma.grupos.findUnique({where:{id}});
  }

  update(id: string, updateGrupoDto: UpdateGrupoDto) {
    return this.prisma.grupos.update({
      data:updateGrupoDto,
      where:{id}
    });
  }

  remove(id: string) {
    return this.prisma.grupos.delete({where:{id}});
  }
}
