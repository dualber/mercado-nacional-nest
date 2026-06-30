import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}

