import { IsByteLength, IsNotEmpty, IsOptional, IsString, IsUUID, Matches,MinLength } from 'class-validator';

export class CreateFincaDto {
  @IsString()
  @IsNotEmpty()
  ibm: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  @MinLength(10, { message: 'El contacto debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto:string;

  @IsUUID()
  id_grupo: string;

  @IsUUID()
  id_comunal: string;
}
