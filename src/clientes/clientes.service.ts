import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}
  create(createClienteDto: CreateClienteDto) {
    return this.prisma.clientes.create({data: createClienteDto});
  }

  findAll() {
    return this.prisma.clientes.findMany();
  }

  findOne(id: string) {
    return this.prisma.clientes.findUnique({where: {id}});
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.prisma.clientes.update({where: {id}, data: updateClienteDto});
  }

  remove(id: string) {
    return this.prisma.clientes.delete({where: {id}});
  }
}
