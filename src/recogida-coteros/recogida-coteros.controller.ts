import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecogidaCoterosService } from './recogida-coteros.service';
import { CreateRecogidaCoteroDto } from './dto/create-recogida-cotero.dto';
import { UpdateRecogidaCoteroDto } from './dto/update-recogida-cotero.dto';

@Controller('recogida-coteros')
export class RecogidaCoterosController {
  constructor(private readonly recogidaCoterosService: RecogidaCoterosService) {}

  @Post()
  async create(@Body() createRecogidaCoteroDto: CreateRecogidaCoteroDto) {
    return await this.recogidaCoterosService.create(createRecogidaCoteroDto);
  }

  @Get()
  async findAll() {
    return await this.recogidaCoterosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.recogidaCoterosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRecogidaCoteroDto: UpdateRecogidaCoteroDto) {
    return await this.recogidaCoterosService.update(+id, updateRecogidaCoteroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.recogidaCoterosService.remove(+id);
  }
}
