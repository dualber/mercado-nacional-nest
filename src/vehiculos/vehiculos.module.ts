import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [VehiculosController],
  providers: [VehiculosService],
})
export class VehiculosModule {}

