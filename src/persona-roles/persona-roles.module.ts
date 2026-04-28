import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PersonaRolesService } from './persona-roles.service';
import { PersonaRolesController } from './persona-roles.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PersonaRolesController],
  providers: [PersonaRolesService],
})
export class PersonaRolesModule {}

