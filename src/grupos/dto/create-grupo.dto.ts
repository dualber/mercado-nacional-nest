import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateGrupoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo_cuenta: string;

  @IsInt()
  @Min(0)
  numero_cuenta: number;
}
