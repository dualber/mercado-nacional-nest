import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { FincasService } from './fincas.service';
import { FincasController } from './fincas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FincasController],
  providers: [FincasService],
})
export class FincasModule {}

