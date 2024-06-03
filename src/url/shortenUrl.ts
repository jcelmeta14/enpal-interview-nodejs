import crypto from 'crypto';
import { base32crockford } from '@scure/base';

export const shortenUrl = (url: string): string => {
  const hashedUrl = crypto.createHash('sha256').update(url).digest();

  return base32crockford.encode(hashedUrl).slice(0, 7).toLowerCase();
}