import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}

