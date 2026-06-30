import { CreateProductoDto } from './create-producto.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  nombre?: string;

  @IsOptional()
  @IsNumber({}, { message: 'El peso por kilo debe ser un número' })
  @Min(0, { message: 'El peso por kilo debe ser mayor o igual a 0' })
  peso_kilo?: number;
}
