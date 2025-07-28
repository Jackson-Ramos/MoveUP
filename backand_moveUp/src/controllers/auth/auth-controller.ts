import { Request, Response } from "express";
import { authenticateUserService } from "../../services/auth/auth-service";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const token = await authenticateUserService(email, password);
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
}
