import { Injectable } from '@nestjs/common';
import { CreateFincaDto } from './dto/create-finca.dto';
import { UpdateFincaDto } from './dto/update-finca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FincasService {
  constructor(private prisma: PrismaService) {}
  async create(createFincaDto: CreateFincaDto) {
    return await this.prisma.fincas.create({
      data: createFincaDto,
    });
  }

  async findAll() {
    return await this.prisma.fincas.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.fincas.findUnique({ where: { id } });
  }

  async update(id: string, updateFincaDto: UpdateFincaDto) {
    return await this.prisma.fincas.update({
      data: updateFincaDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.fincas.delete({ where: { id } });
  }
}
