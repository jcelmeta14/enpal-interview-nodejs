import { NextFunction, Request, Response } from "express";
import { bannedWords } from './constants'

export const checkUrlBannedWords = (req: Request, res: Response, next: NextFunction) => {
  const { originalLink } = req.body;

  if (bannedWords.some(bannedWord => originalLink.includes(bannedWord))) {
    res.status(400).send('URL contains a banned word');
    return;
  }
    
  next();
}