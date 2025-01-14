import { IsOptional, IsString } from 'class-validator';
export class LoginUserDto {
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
