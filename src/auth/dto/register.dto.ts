import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ type: String, example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ type: String, example: 'changeme' })
  password: string;

  @ApiProperty({ type: String, example: 'John' })
  firstName: string;

  @ApiProperty({ type: String, example: 'Doe' })
  lastName: string;
}
