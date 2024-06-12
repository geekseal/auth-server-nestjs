import { ApiResponseProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @ApiResponseProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  @Column({ type: String, unique: true })
  @Expose({ groups: ['me', 'admin'] })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @ApiResponseProperty({ type: String, example: 'John' })
  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @ApiResponseProperty({ type: String, example: 'Doe' })
  @Index()
  @Column({ type: String, nullable: true })
  lastName: string | null;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiResponseProperty()
  @DeleteDateColumn()
  deletedAt: Date;
}
