import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepositoryAbstract } from './user.repository';
import { UsersRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: UserRepositoryAbstract,
      useClass: UsersRepository,
    },
  ],
  exports: [UserRepositoryAbstract],
})
export class UserPersistenceModule {}
