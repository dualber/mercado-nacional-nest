import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecogidaCoterosService } from './recogida-coteros.service';
import { CreateRecogidaCoteroDto } from './dto/create-recogida-cotero.dto';
import { UpdateRecogidaCoteroDto } from './dto/update-recogida-cotero.dto';

@Controller('recogida-coteros')
export class RecogidaCoterosController {
  constructor(private readonly recogidaCoterosService: RecogidaCoterosService) {}

  @Post()
  create(@Body() createRecogidaCoteroDto: CreateRecogidaCoteroDto) {
    return this.recogidaCoterosService.create(createRecogidaCoteroDto);
  }

  @Get()
  findAll() {
    return this.recogidaCoterosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recogidaCoterosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecogidaCoteroDto: UpdateRecogidaCoteroDto) {
    return this.recogidaCoterosService.update(+id, updateRecogidaCoteroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recogidaCoterosService.remove(+id);
  }
}
