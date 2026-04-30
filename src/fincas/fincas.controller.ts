import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FincasService } from './fincas.service';
import { CreateFincaDto } from './dto/create-finca.dto';
import { UpdateFincaDto } from './dto/update-finca.dto';

@Controller('fincas')
export class FincasController {
  constructor(private readonly fincasService: FincasService) {}

  @Post()
  async create(@Body() createFincaDto: CreateFincaDto) {
    return await this.fincasService.create(createFincaDto);
  }

  @Get()
  async findAll() {
    return await this.fincasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fincasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFincaDto: UpdateFincaDto) {
    return await this.fincasService.update(id, updateFincaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fincasService.remove(id);
  }
}
