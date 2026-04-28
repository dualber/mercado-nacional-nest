import { Injectable } from '@nestjs/common';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';

@Injectable()
export class RecogidasService {
  create(createRecogidaDto: CreateRecogidaDto) {
    return 'This action adds a new recogida';
  }

  findAll() {
    return `This action returns all recogidas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recogida`;
  }

  update(id: number, updateRecogidaDto: UpdateRecogidaDto) {
    return `This action updates a #${id} recogida`;
  }

  remove(id: number) {
    return `This action removes a #${id} recogida`;
  }
}
