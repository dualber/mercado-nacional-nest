import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class VehiculosService {
  constructor(private prisma:PrismaService){}

  async validarConductor(id_persona:string){
    
    const persona = await this.prisma.personas.findUnique({ where:{id: id_persona},
    include:{
      roles:{
        include:{
          rol:true,
        }
      }
    }});

    if(!persona){
      throw new NotFoundException('el conductor del vehiculo no existe');
    }

    const persona_rol = persona.roles.find(n => n.rol.nombre == "Conductor");

    if(!persona_rol){
      throw new BadRequestException(
        'la persona seleccionada no tienen el rol de conductor'
      )
    }

    return persona;
  }



  async create(createVehiculoDto: CreateVehiculoDto) {

    await this.validarConductor(
      createVehiculoDto.id_persona,
    )

    return await this.prisma.vehiculos.create({
      data:createVehiculoDto,
    })

  }


  async findAll() {
    return await this.prisma.vehiculos.findMany();
  }

  async findOne(placa: string) {
    return await this.prisma.vehiculos.findUnique({ where:{placa}});
  }

  async update(placa: string, updateVehiculoDto: UpdateVehiculoDto) {
    return await this.prisma.vehiculos.update({
      data:updateVehiculoDto,
      where:{placa},
    });
  }

  async remove(placa: string) {
    return await this.prisma.vehiculos.delete({where:{placa}});
  }
}
