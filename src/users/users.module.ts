import { Module } from '@nestjs/common';
import { UserPersistenceModule } from './infrastructure/persistence/persistence.module';
import { UsersService } from './users.service';

@Module({
  // define repositories to be registered in the current scope
  imports: [UserPersistenceModule],
  providers: [UsersService],
  exports: [UsersService, UserPersistenceModule],
})
export class UsersModule {}
