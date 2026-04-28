import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComunalesService } from './comunales.service';
import { CreateComunaleDto } from './dto/create-comunale.dto';
import { UpdateComunaleDto } from './dto/update-comunale.dto';

@Controller('comunales')
export class ComunalesController {
  constructor(private readonly comunalesService: ComunalesService) {}

  @Post()
  create(@Body() createComunaleDto: CreateComunaleDto) {
    return this.comunalesService.create(createComunaleDto);
  }

  @Get()
  findAll() {
    return this.comunalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComunaleDto: UpdateComunaleDto) {
    return this.comunalesService.update(+id, updateComunaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comunalesService.remove(+id);
  }
}
