import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto) {
    return await this.ventasService.create(createVentaDto);
  }

  @Get()
  async findAll() {
    return await this.ventasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ventasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return await this.ventasService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ventasService.remove(+id);
  }
}
