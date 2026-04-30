import { Injectable } from '@nestjs/common';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';

@Injectable()
export class DetalleRecogidasService {
  async create(createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return await 'This action adds a new detalleRecogida';
  }

  async findAll() {
    return await `This action returns all detalleRecogidas`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} detalleRecogida`;
  }

  async update(id: number, updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return await `This action updates a #${id} detalleRecogida`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} detalleRecogida`;
  }
}
