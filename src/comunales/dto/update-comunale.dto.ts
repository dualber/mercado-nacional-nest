import { CreateComunaleDto } from './create-comunale.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateComunaleDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
