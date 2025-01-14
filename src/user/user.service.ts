import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  register(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  login(loginUserDto: LoginUserDto) {
    return 'This action adds a new user';
  }
  getme(id: number) {
    return `This action returns a #${id} user`;
  }
}
