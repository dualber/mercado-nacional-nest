import { CreateComunaleDto } from './create-comunale.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateComunaleDto {
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre?: string;

  @IsOptional()
  @IsString({ message: 'La zona debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La zona no puede estar vacía' })
  zona?: string;
}
