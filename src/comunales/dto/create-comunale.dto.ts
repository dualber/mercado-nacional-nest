import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComunaleDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString({ message: 'La zona debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La zona es obligatoria' })
  zona: string;
  

}
