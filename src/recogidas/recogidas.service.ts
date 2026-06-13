import { Injectable } from '@nestjs/common';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Persona } from 'src/personas/entities/persona.entity';

@Injectable()
export class RecogidasService {
  constructor(private prisma: PrismaService){}
  async create(createRecogidaDto: CreateRecogidaDto) {
    return await this.prisma.recogidas.create({
      data: {
        fecha: new Date(createRecogidaDto.fecha),
        cantidad_total: 0,
        vehiculo: {
          connect: {
            placa: createRecogidaDto.placa_vehiculo,
          },
        },
      },
    });
  }

  async findAll() {
    const recogidas = await this.prisma.recogidas.findMany({
      include:{
        vehiculo:{
          include:{
            persona:true,
          }
        },
        coteros:{
          include:{
            persona:true,
          }
        },
        detalle:true,
      }
    })

    return recogidas.map((recogida) =>({
      id:recogida.id,
      fecha:recogida.fecha,
      vehiculo:recogida.vehiculo.placa,
      conductor:recogida.vehiculo.persona.nombres + " " + recogida.vehiculo.persona.apellidos,
      coteros:recogida.coteros.map((c) => (c.persona.nombres + " " + c.persona.apellidos)).join()
      }))
  }

  async findOne(id: string) {
    return await this.prisma.recogidas.findUnique({ where: { id } });
  }

  async update(id: string, updateRecogidaDto: UpdateRecogidaDto) {
    return await this.prisma.recogidas.update({ data: updateRecogidaDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.recogidas.delete({ where: { id } });
  }
}
