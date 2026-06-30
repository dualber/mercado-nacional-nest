import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  async create(@Body() createCompraDto: CreateCompraDto) {
    return await this.comprasService.create(createCompraDto);
  }

  @Get()
  async findAll() {
    return await this.comprasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.comprasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return await this.comprasService.update(id, updateCompraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.comprasService.remove(id);
  }

  

}
