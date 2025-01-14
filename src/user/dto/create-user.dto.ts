import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Roles } from 'src/roles/roles.user';
export class CreateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsEnum(Roles)
  roles: Roles;
}
