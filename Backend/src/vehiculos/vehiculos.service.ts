import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class VehiculosService {
  constructor(private prisma: PrismaService) {}

  async validarConductor(id_persona: string) {
    const persona = await this.prisma.personas.findUnique({
      where: { id: id_persona },
      include: {
        roles: {
          include: {
            rol: true,
          },
        },
      },
    });

    if (!persona) {
      throw new NotFoundException('el conductor del vehiculo no existe');
    }

    const persona_rol = persona.roles.find((n) => n.rol.nombre == 'Conductor');

    if (!persona_rol) {
      throw new BadRequestException(
        'la persona seleccionada no tienen el rol de conductor',
      );
    }

    return persona;
  }

  async create(createVehiculoDto: CreateVehiculoDto) {
    await this.validarConductor(createVehiculoDto.id_persona);

    return await this.prisma.vehiculos.create({
      data: createVehiculoDto,
    });
  }

  async findAll() {
    const vehiculos = await this.prisma.vehiculos.findMany({
      include: {
        persona: {
          include: {
            roles: {
              include: {
                rol: true,
              },
            },
          },
        },
      },
    });

    return vehiculos.map((vehiculo) => ({
      placa: vehiculo.placa,
      marca: vehiculo.marca,
      capacidad: vehiculo.capacidad,
      descripcion: vehiculo.descripcion,
      conductor: `${vehiculo.persona.nombres} ${vehiculo.persona.apellidos}`,
    }));
  }

  async findOne(placa: string) {
    const vehiculo = await this.prisma.vehiculos.findUnique({
      where: { placa },
      include: {
        persona: {
          include: {
            roles: {
              include: {
                rol: true,
              },
            },
          },
        },
      },
    });

    return {
      placa: vehiculo.placa,
      marca: vehiculo.marca,
      descripcion: vehiculo.descripcion,
      capacidad: vehiculo.capacidad,
      conductor: vehiculo.persona.nombres,
      rol: vehiculo.persona.roles.map((r) => r.rol.nombre).join(),
    };
  }

  async update(placa: string, updateVehiculoDto: UpdateVehiculoDto) {
    return await this.prisma.vehiculos.update({
      data: updateVehiculoDto,
      where: { placa },
    });
  }

  async remove(placa: string) {
    return await this.prisma.vehiculos.delete({ where: { placa } });
  }
}
