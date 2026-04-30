import { Injectable } from '@nestjs/common';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';

@Injectable()
export class RecogidasService {
  async create(createRecogidaDto: CreateRecogidaDto) {
    return await 'This action adds a new recogida';
  }

  async findAll() {
    return await `This action returns all recogidas`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} recogida`;
  }

  async update(id: number, updateRecogidaDto: UpdateRecogidaDto) {
    return await `This action updates a #${id} recogida`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} recogida`;
  }
}
