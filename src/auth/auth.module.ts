import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { SessionModule } from '../session/session.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

config();

const configService = new ConfigService();

@Module({
  imports: [
    UsersModule,
    // https://github.com/auth0/node-jsonwebtoken#usage
    JwtModule.register({
      global: true,
      secret: configService.getOrThrow('AUTH_JWT_SECRET'),
      signOptions: {
        expiresIn: configService.getOrThrow('AUTH_JWT_TOKEN_EXPIRES_IN'),
      },
    }),
    SessionModule,
    ConfigModule,
  ],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
