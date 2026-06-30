import { IsByteLength, IsNotEmpty, IsOptional, IsString, IsUUID, Matches,MinLength } from 'class-validator';

export class CreateFincaDto {
  @IsString({ message: 'El IBM debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El IBM es obligatorio' })
  ibm: string;

  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString({ message: 'El contacto debe ser una cadena de texto' })
  @IsOptional()
  @MinLength(10, { message: 'El contacto debe tener al menos 10 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'El contacto solo debe contener números' })
  contacto:string;

  @IsUUID('4', { message: 'El id del grupo debe ser un UUID válido' })
  id_grupo: string;

  @IsUUID('4', { message: 'El id de la comunal debe ser un UUID válido' })
  id_comunal: string;
}
