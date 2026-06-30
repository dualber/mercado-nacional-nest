import { Injectable } from '@nestjs/common';
import { CreateRecogidaCoteroDto } from './dto/create-recogida-cotero.dto';
import { UpdateRecogidaCoteroDto } from './dto/update-recogida-cotero.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class RecogidaCoterosService {
  constructor(private prisma: PrismaService) {}
  async create(createRecogidaCoteroDto: CreateRecogidaCoteroDto) {
    return await this.prisma.recogidaCoteros.create({
      data: createRecogidaCoteroDto,
    });
  }

  async findAll() {
    const recogidaCotero = await this.prisma.recogidaCoteros.findMany({
      include:{
        persona:true,
      }
    });
    
    //aplicamos
    return recogidaCotero.map((rCotero)=>({
      id_recogida:rCotero.id_recogida,
      persona:rCotero.persona.nombres + " " + rCotero.persona.apellidos
    }))
  }

  async findOne(id: string) {
    return await this.prisma.recogidaCoteros.findUnique({ where: { id } });
  }

  async update(id: string, updateRecogidaCoteroDto: UpdateRecogidaCoteroDto) {
    return await this.prisma.recogidaCoteros.update({
      data: updateRecogidaCoteroDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.recogidaCoteros.delete({ where: { id } });
  }
}
