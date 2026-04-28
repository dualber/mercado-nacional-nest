import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  descipcion: string;

  @IsNumber()
  @Min(0)
  capacidad: number;
}
