import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { DeepPartial } from 'typeorm';
import { User } from './domain/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepositoryAbstract } from './infrastructure/persistence/user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepositoryAbstract) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  findById(id: User['id']): Promise<User | null> {
    return this.usersRepository.findById(id);
  }

  findByEmail(email: User['email']): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const clonedPayload = { ...createUserDto };

    const userObject = await this.usersRepository.findByEmail(
      clonedPayload.email,
    );
    if (userObject) {
      throw new UnprocessableEntityException('email already exists');
    }

    const salt = await bcrypt.genSalt();
    clonedPayload.password = await bcrypt.hash(clonedPayload.password, salt);

    return this.usersRepository.create(clonedPayload);
  }

  async update(
    id: User['id'],
    payload: DeepPartial<User>,
  ): Promise<User | null> {
    const clonedPayload = { ...payload };

    if (
      clonedPayload.password &&
      clonedPayload.previousPassword !== clonedPayload.password
    ) {
      const salt = await bcrypt.genSalt();
      clonedPayload.password = await bcrypt.hash(clonedPayload.password, salt);
    }

    return await this.usersRepository.update(id, clonedPayload);
  }

  async remove(id: User['id']): Promise<void> {
    await this.usersRepository.remove(id);
  }
}
