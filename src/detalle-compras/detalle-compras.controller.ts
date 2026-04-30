import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleComprasService } from './detalle-compras.service';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';

@Controller('detalle-compras')
export class DetalleComprasController {
  constructor(private readonly detalleComprasService: DetalleComprasService) {}

  @Post()
  async create(@Body() createDetalleCompraDto: CreateDetalleCompraDto) {
    return await this.detalleComprasService.create(createDetalleCompraDto);
  }

  @Get()
  async findAll() {
    return await this.detalleComprasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.detalleComprasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDetalleCompraDto: UpdateDetalleCompraDto) {
    return await this.detalleComprasService.update(id, updateDetalleCompraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.detalleComprasService.remove(id);
  }
}
