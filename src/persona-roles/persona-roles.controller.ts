import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaRolesService } from './persona-roles.service';
import { CreatePersonaRoleDto } from './dto/create-persona-role.dto';
import { UpdatePersonaRoleDto } from './dto/update-persona-role.dto';

@Controller('persona-roles')
export class PersonaRolesController {
  constructor(private readonly personaRolesService: PersonaRolesService) {}

  @Post()
  create(@Body() createPersonaRoleDto: CreatePersonaRoleDto) {
    return this.personaRolesService.create(createPersonaRoleDto);
  }

  @Get()
  findAll() {
    return this.personaRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaRoleDto: UpdatePersonaRoleDto) {
    return this.personaRolesService.update(+id, updatePersonaRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaRolesService.remove(+id);
  }
}
