import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RecogidasService } from './recogidas.service';
import { RecogidasController } from './recogidas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RecogidasController],
  providers: [RecogidasService],
})
export class RecogidasModule {}

