import { Module } from '@nestjs/common';
import { SessionPersistenceModule } from './infrastructure/persistence/persistence.module';
import { SessionService } from './session.service';

@Module({
  imports: [SessionPersistenceModule],
  providers: [SessionService],
  exports: [SessionService, SessionPersistenceModule],
})
export class SessionModule {}
