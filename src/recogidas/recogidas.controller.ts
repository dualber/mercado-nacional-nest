import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecogidasService } from './recogidas.service';
import { CreateRecogidaDto } from './dto/create-recogida.dto';
import { UpdateRecogidaDto } from './dto/update-recogida.dto';

@Controller('recogidas')
export class RecogidasController {
  constructor(private readonly recogidasService: RecogidasService) {}

  @Post()
  async create(@Body() createRecogidaDto: CreateRecogidaDto) {
    return await this.recogidasService.create(createRecogidaDto);
  }

  @Get()
  async findAll() {
    return await this.recogidasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.recogidasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRecogidaDto: UpdateRecogidaDto) {
    return await this.recogidasService.update(+id, updateRecogidaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.recogidasService.remove(+id);
  }
}
