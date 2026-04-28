import { Injectable } from '@nestjs/common';
import { CreateComunaleDto } from './dto/create-comunale.dto';
import { UpdateComunaleDto } from './dto/update-comunale.dto';

@Injectable()
export class ComunalesService {
  create(createComunaleDto: CreateComunaleDto) {
    return 'This action adds a new comunale';
  }

  findAll() {
    return `This action returns all comunales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comunale`;
  }

  update(id: number, updateComunaleDto: UpdateComunaleDto) {
    return `This action updates a #${id} comunale`;
  }

  remove(id: number) {
    return `This action removes a #${id} comunale`;
  }
}
