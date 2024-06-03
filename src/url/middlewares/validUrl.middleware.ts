import { NextFunction, Request, Response } from "express";

export const isValidUrl = (req: Request, res: Response, next: NextFunction) => {
  const { originalLink } = req.body;

  try {
    new URL(originalLink);
  } catch (err) {
    res.status(400).send('Invalid URL');
  }

  next();
}