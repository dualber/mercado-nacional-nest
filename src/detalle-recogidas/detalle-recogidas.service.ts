import { Injectable } from '@nestjs/common';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';

@Injectable()
export class DetalleRecogidasService {
  create(createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return 'This action adds a new detalleRecogida';
  }

  findAll() {
    return `This action returns all detalleRecogidas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleRecogida`;
  }

  update(id: number, updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return `This action updates a #${id} detalleRecogida`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleRecogida`;
  }
}
