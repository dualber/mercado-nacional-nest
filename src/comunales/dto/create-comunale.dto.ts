import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComunaleDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  zona: string;
  

}
