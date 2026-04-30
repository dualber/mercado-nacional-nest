import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  async create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return await this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  async findAll() {
    return await this.vehiculosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vehiculosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return await this.vehiculosService.update(+id, updateVehiculoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.vehiculosService.remove(+id);
  }
}
