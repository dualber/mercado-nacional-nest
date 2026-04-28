import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { ComunalesService } from './comunales.service';
import { CreateComunaleDto } from './dto/create-comunale.dto';
import { UpdateComunaleDto } from './dto/update-comunale.dto';

@Controller('comunales')
export class ComunalesController {
  constructor(private readonly comunalesService: ComunalesService) {}

  @Post()
  async create(@Body() createComunaleDto: CreateComunaleDto) {
    return this.comunalesService.create(createComunaleDto);
  }

  @Get()
  async findAll() {
    return this.comunalesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.comunalesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateComunaleDto: UpdateComunaleDto) {
    return this.comunalesService.update(id, updateComunaleDto);
  }

  @Delete(':id')
  async   remove(@Param('id') id: string) {
    if (!id) {
      throw new BadRequestException('El ID es requerido');
    }else{
      const buscar = this.comunalesService.findOne(id);
      if (!buscar) {
        throw new NotFoundException('La comunale no existe');
      }else{
        return this.comunalesService.remove(id);
      }
    }
  }
}
