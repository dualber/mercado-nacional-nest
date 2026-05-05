import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateVehiculoDto {
  @IsString({ message: 'La placa debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La placa es obligatoria' })
  placa: string;

  @IsString({ message: 'La marca debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La marca es obligatoria' })
  marca: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descipcion: string;

  @IsNumber({}, { message: 'La capacidad debe ser un número' })
  @Min(0, { message: 'La capacidad debe ser mayor o igual a 0' })
  capacidad: number;
}
