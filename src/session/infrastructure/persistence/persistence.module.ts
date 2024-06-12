import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './entities/session.entity';
import { SessionRepositoryAbstract } from './session.repository';
import { SessionRepository } from './repositories/session.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  providers: [
    {
      provide: SessionRepositoryAbstract,
      useClass: SessionRepository,
    },
  ],
  exports: [SessionRepositoryAbstract],
})
export class SessionPersistenceModule {}
