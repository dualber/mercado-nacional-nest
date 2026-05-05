import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductoDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre:string;

  @IsNumber({}, { message: 'El peso por kilo debe ser un número' })
  @IsNotEmpty({ message: 'El peso por kilo es obligatorio' })
  @Min(0, { message: 'El peso por kilo debe ser mayor o igual a 0' })
  peso_kilo: number;
}
