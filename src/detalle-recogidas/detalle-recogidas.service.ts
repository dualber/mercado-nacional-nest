import { Injectable } from '@nestjs/common';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vehiculo } from 'src/vehiculos/entities/vehiculo.entity';

@Injectable()
export class DetalleRecogidasService {
  constructor(private prisma: PrismaService){}
  async create(createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return await this.prisma.detalleRecogidas.create({
      data: {
        finca:{
          connect:{
            id:createDetalleRecogidaDto.id_finca,
          }
        },
        recogida:{
          connect:{
            id:createDetalleRecogidaDto.id_recogida,
          }
        },
        producto:{
          connect:{
            id:createDetalleRecogidaDto.id_producto,
          }
        },
        cantidad:createDetalleRecogidaDto.cantidad
      },
    });
  }

  async findAll() {

    const detalleRecogidas = await this.prisma.detalleRecogidas.findMany({
      include:{
        finca:true,
        producto:true,
        recogida:true
      }
    })
    //contruir el payload para la respuesta

    return detalleRecogidas.map((detalleR) =>({
      id:detalleR.id,
      finca:detalleR.finca.nombre,
      producto:detalleR.producto.nombre,
      cantidad:detalleR.cantidad,
      fecha:detalleR.recogida.fecha,
      Vehiculo:detalleR.recogida.placa_vehiculo
    }))



    //return await this.prisma.detalleRecogidas.findMany();

  }

  async findOne(id: string) {
    return await this.prisma.detalleRecogidas.findUnique({ where: { id } });
  }

  async update(id: string, updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return await this.prisma.detalleRecogidas.update({ data: updateDetalleRecogidaDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.detalleRecogidas.delete({ where: { id } });
  }
}
