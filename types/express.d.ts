import { JwtPayload, decode } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      decode?: string | JwtPayload; // Token'dan gelen verileri ekliyoruz
    }
  }
}
