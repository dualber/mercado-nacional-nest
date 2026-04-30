import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculosService {
  async create(createVehiculoDto: CreateVehiculoDto) {
    return await 'This action adds a new vehiculo';
  }

  async findAll() {
    return await `This action returns all vehiculos`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} vehiculo`;
  }

  async update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return await `This action updates a #${id} vehiculo`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} vehiculo`;
  }
}
