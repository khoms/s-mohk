import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entity/User';
import { UserRepository } from 'src/repository/repository';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | string> {
    try {
      const { password } = createUserDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await this.userRepository.save({
        ...createUserDto,
        password: hashedPassword,
      });

      return user;
    } catch (err) {
      return 'Error on creating user';
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find();

      return users;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const user = this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findByEmail(email: string) {
    try {
      const user = this.userRepository.findOne({ where: { email } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
