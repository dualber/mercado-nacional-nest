import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}

