import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentasService {
  async create(createVentaDto: CreateVentaDto) {
    return await 'This action adds a new venta';
  }

  async findAll() {
    return await `This action returns all ventas`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} venta`;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto) {
    return await `This action updates a #${id} venta`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} venta`;
  }
}
