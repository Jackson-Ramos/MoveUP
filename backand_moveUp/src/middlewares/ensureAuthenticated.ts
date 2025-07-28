import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface Payload {
  sub: string;
  role: string;
  email: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const secret = process.env.JWT_SECRET || "default_secret";
    const decoded = jwt.verify(token, secret) as Payload;

    // opcional: anexar o user ao req para usar depois
    req.user = {
      id: decoded.sub,
      email: decoded.email,
      role: decoded.role,
    };

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}
