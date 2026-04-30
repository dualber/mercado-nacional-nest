import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @Post()
  async create(@Body() createGrupoDto: CreateGrupoDto) {
    return await this.gruposService.create(createGrupoDto);
  }

  @Get()
  async findAll() {
    return await this.gruposService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gruposService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return await this.gruposService.update(id, updateGrupoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.gruposService.remove(id);
  }
}
