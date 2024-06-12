import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from 'src/users/domain/user';

export class EmailLoginDto {
  @ApiProperty({ type: String, example: 'test@example.com' })
  @Transform((params: TransformFnParams): string | undefined =>
    params.value?.toLowerCase().trim(),
  )
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'goat' })
  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto {
  token: string;

  refreshToken: string;

  tokenExpires: number;

  user: User;
}
