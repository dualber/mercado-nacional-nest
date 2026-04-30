import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService {
  async create(createPersonaDto: CreatePersonaDto) {
    return await 'This action adds a new persona';
  }

  async findAll() {
    return await `This action returns all personas`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} persona`;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return await `This action updates a #${id} persona`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} persona`;
  }
}
