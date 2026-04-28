import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsUUID()
  id_persona: string;
}
