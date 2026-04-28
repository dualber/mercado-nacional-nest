import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleRecogidaDto } from './create-detalle-recogida.dto';

export class UpdateDetalleRecogidaDto extends PartialType(CreateDetalleRecogidaDto) {}
