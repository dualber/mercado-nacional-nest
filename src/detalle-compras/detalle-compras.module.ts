import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DetalleComprasService } from './detalle-compras.service';
import { DetalleComprasController } from './detalle-compras.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DetalleComprasController],
  providers: [DetalleComprasService],
})
export class DetalleComprasModule {}

