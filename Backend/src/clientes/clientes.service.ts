import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}
  async create(createClienteDto: CreateClienteDto) {
    return await this.prisma.clientes.create({data: createClienteDto});
  }

  async findAll() {
    return await this.prisma.clientes.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.clientes.findUnique({where: {id}});
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    return await this.prisma.clientes.update({where: {id}, data: updateClienteDto});
  }

  async remove(id: string) {
    return await this.prisma.clientes.delete({where: {id}});
  }
}
