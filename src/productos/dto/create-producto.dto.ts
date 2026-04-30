import { IsNotEmpty, IsNumber, IsString, Min, isNotEmpty,   } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre:string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  peso_kilo: number;
}
