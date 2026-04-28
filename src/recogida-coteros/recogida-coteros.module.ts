import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RecogidaCoterosService } from './recogida-coteros.service';
import { RecogidaCoterosController } from './recogida-coteros.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RecogidaCoterosController],
  providers: [RecogidaCoterosService],
})
export class RecogidaCoterosModule {}

