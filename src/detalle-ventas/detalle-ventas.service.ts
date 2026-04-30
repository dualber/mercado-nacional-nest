import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';

@Injectable()
export class DetalleVentasService {
  async create(createDetalleVentaDto: CreateDetalleVentaDto) {
    return await 'This action adds a new detalleVenta';
  }

  async findAll() {
    return await `This action returns all detalleVentas`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} detalleVenta`;
  }

  async update(id: number, updateDetalleVentaDto: UpdateDetalleVentaDto) {
    return await `This action updates a #${id} detalleVenta`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} detalleVenta`;
  }
}
