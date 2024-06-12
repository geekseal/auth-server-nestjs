import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/infrastructure/persistence/entities/user.entity';

export default class UsersSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);
    await repository.insert([
      {
        email: 'test@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
        password: await this.hashPassword('goat'),
      },
    ]);
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }
}
