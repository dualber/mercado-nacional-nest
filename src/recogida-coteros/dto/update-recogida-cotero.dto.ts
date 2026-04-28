import { PartialType } from '@nestjs/mapped-types';
import { CreateRecogidaCoteroDto } from './create-recogida-cotero.dto';

export class UpdateRecogidaCoteroDto extends PartialType(CreateRecogidaCoteroDto) {}
