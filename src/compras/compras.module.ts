import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}

