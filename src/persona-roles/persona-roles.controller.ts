import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaRolesService } from './persona-roles.service';
import { CreatePersonaRoleDto } from './dto/create-persona-role.dto';
import { UpdatePersonaRoleDto } from './dto/update-persona-role.dto';

@Controller('persona-roles')
export class PersonaRolesController {
  constructor(private readonly personaRolesService: PersonaRolesService) {}

  @Post()
  async create(@Body() createPersonaRoleDto: CreatePersonaRoleDto) {
    return await this.personaRolesService.create(createPersonaRoleDto);
  }

  @Get()
  async findAll() {
    return await this.personaRolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personaRolesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonaRoleDto: UpdatePersonaRoleDto) {
    return await this.personaRolesService.update(id, updatePersonaRoleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.personaRolesService.remove(id);
  }
}
