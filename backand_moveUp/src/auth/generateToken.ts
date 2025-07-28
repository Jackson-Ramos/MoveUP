import jwt from "jsonwebtoken";
import { IUser } from "../models/IUser";

export function generateToken(user: IUser): string {
  const payload = {
    sub: user.id,
    role: user.role,
    email: user.email,
  };

  const secret = process.env.JWT_SECRET || "default_secret";
  const expiresIn = "1d";

  return jwt.sign(payload, secret, { expiresIn });
}
