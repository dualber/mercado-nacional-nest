import { PartialType } from '@nestjs/mapped-types';
import { CreateComunaleDto } from './create-comunale.dto';

export class UpdateComunaleDto extends PartialType(CreateComunaleDto) {}
