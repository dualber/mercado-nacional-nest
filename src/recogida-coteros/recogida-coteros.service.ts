import { Injectable } from '@nestjs/common';
import { CreateRecogidaCoteroDto } from './dto/create-recogida-cotero.dto';
import { UpdateRecogidaCoteroDto } from './dto/update-recogida-cotero.dto';

@Injectable()
export class RecogidaCoterosService {
  async create(createRecogidaCoteroDto: CreateRecogidaCoteroDto) {
    return await 'This action adds a new recogidaCotero';
  }

  async findAll() {
    return await `This action returns all recogidaCoteros`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} recogidaCotero`;
  }

  async update(id: number, updateRecogidaCoteroDto: UpdateRecogidaCoteroDto) {
    return await `This action updates a #${id} recogidaCotero`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} recogidaCotero`;
  }
}
