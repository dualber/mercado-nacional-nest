import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DetalleVentasService } from './detalle-ventas.service';
import { DetalleVentasController } from './detalle-ventas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DetalleVentasController],
  providers: [DetalleVentasService],
})
export class DetalleVentasModule {}

