import { User } from 'src/users/domain/user';
import { DeepPartial } from 'typeorm';

export abstract class UserRepositoryAbstract {
  abstract findAll(): Promise<User[]>;

  abstract findById(id: User['id']): Promise<User | null>;

  abstract findByEmail(email: User['email']): Promise<User | null>;

  abstract create(
    data: Omit<User, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
  ): Promise<User>;

  abstract update(
    id: User['id'],
    payload: DeepPartial<User>,
  ): Promise<User | null>;

  abstract remove(id: User['id']): Promise<void>;
}
