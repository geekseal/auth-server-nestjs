import { Session } from 'src/session/domain/session';
import { User } from 'src/users/domain/user';

export abstract class SessionRepositoryAbstract {
  abstract findById(id: Session['id']): Promise<Session | null>;

  abstract create(
    data: Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Session>;

  abstract update(
    id: Session['id'],
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null>;

  abstract deleteById(id: Session['id']): Promise<void>;

  abstract deleteByUserId(conditions: { userId: User['id'] }): Promise<void>;

  abstract deleteByUserIdWithExclude(conditions: {
    userId: User['id'];
    excludeSessionId: Session['id'];
  }): Promise<void>;
}
