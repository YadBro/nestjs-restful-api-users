import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization)
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);

    const token = authorization.split(' ')[1];

    if (!token)
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);

    if (token !== 'ABC')
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    next();
  }
}
