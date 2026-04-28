import { PartialType } from '@nestjs/mapped-types';
import { CreateRecogidaDto } from './create-recogida.dto';

export class UpdateRecogidaDto extends PartialType(CreateRecogidaDto) {}
