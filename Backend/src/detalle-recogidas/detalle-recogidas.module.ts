import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DetalleRecogidasService } from './detalle-recogidas.service';
import { DetalleRecogidasController } from './detalle-recogidas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DetalleRecogidasController],
  providers: [DetalleRecogidasService],
})
export class DetalleRecogidasModule {}

