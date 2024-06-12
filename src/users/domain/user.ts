import { ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class User {
  @ApiResponseProperty({
    type: Number,
  })
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  email: string | null;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @ApiResponseProperty({
    type: String,
    example: 'John',
  })
  firstName: string | null;

  @ApiResponseProperty({
    type: String,
    example: 'Doe',
  })
  lastName: string | null;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  deletedAt: Date;
}
