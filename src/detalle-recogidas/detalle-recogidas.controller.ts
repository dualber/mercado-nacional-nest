import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRecogidasService } from './detalle-recogidas.service';
import { CreateDetalleRecogidaDto } from './dto/create-detalle-recogida.dto';
import { UpdateDetalleRecogidaDto } from './dto/update-detalle-recogida.dto';

@Controller('detalle-recogidas')
export class DetalleRecogidasController {
  constructor(private readonly detalleRecogidasService: DetalleRecogidasService) {}

  @Post()
  create(@Body() createDetalleRecogidaDto: CreateDetalleRecogidaDto) {
    return this.detalleRecogidasService.create(createDetalleRecogidaDto);
  }

  @Get()
  findAll() {
    return this.detalleRecogidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleRecogidasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleRecogidaDto: UpdateDetalleRecogidaDto) {
    return this.detalleRecogidasService.update(+id, updateDetalleRecogidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleRecogidasService.remove(+id);
  }
}
