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

  @Get(':placa')
  async findOne(@Param('placa') placa: string) {
    return await this.vehiculosService.findOne(placa);
  }

  @Patch(':placa')
  async update(@Param('placa') placa: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return await this.vehiculosService.update(placa, updateVehiculoDto);
  }

  @Delete(':placa')
  async remove(@Param('placa') placa: string) {
    return await this.vehiculosService.remove(placa);
  }
}
