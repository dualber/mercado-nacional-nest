import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRecogidasService } from './detalle-recogidas.service';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';

@Controller('detalle-recogidas')
export class DetalleRecogidasController {
  constructor(private readonly detalleRecogidasService: DetalleRecogidasService) {}

  @Post()
  async create(@Body() createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return await this.detalleRecogidasService.create(createDetalleRecogidaDto);
  }

  @Get()
  async findAll() {
    return await this.detalleRecogidasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.detalleRecogidasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return await this.detalleRecogidasService.update(+id, updateDetalleRecogidaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.detalleRecogidasService.remove(+id);
  }
}
