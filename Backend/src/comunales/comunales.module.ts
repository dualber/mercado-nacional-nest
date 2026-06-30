import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ComunalesService } from './comunales.service';
import { ComunalesController } from './comunales.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ComunalesController],
  providers: [ComunalesService],
})
export class ComunalesModule {}

