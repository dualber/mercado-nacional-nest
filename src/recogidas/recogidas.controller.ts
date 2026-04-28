import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecogidasService } from './recogidas.service';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';

@Controller('recogidas')
export class RecogidasController {
  constructor(private readonly recogidasService: RecogidasService) {}

  @Post()
  create(@Body() createRecogidaDto: CreateRecogidaDto) {
    return this.recogidasService.create(createRecogidaDto);
  }

  @Get()
  findAll() {
    return this.recogidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recogidasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecogidaDto: UpdateRecogidaDto) {
    return this.recogidasService.update(+id, updateRecogidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recogidasService.remove(+id);
  }
}
