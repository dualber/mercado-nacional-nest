import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  async create(createRoleDto: CreateRoleDto) {
    return await 'This action adds a new role';
  }

  async findAll() {
    return await `This action returns all roles`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} role`;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await `This action updates a #${id} role`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} role`;
  }
}
