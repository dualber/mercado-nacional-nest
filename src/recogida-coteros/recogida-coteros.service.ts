import { Injectable } from '@nestjs/common';
import { CreateRecogidaCoteroDto } from './dto/create-recogida-cotero.dto';
import { UpdateRecogidaCoteroDto } from './dto/update-recogida-cotero.dto';

@Injectable()
export class RecogidaCoterosService {
  create(createRecogidaCoteroDto: CreateRecogidaCoteroDto) {
    return 'This action adds a new recogidaCotero';
  }

  findAll() {
    return `This action returns all recogidaCoteros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recogidaCotero`;
  }

  update(id: number, updateRecogidaCoteroDto: UpdateRecogidaCoteroDto) {
    return `This action updates a #${id} recogidaCotero`;
  }

  remove(id: number) {
    return `This action removes a #${id} recogidaCotero`;
  }
}
