import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Jwtpayload } from './jwt-payload.interface';
import { User } from 'src/entity/User';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      secretOrKey: 'khoms',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: Jwtpayload) {
    const { username, userId } = payload;
    const user: User = await this.userService.findOne(userId);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
