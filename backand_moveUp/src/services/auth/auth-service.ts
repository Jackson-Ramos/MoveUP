import { compare } from "bcrypt";
import { generateToken } from "../../auth/generateToken";
import { findByEmailService } from "../user/user-services";

export async function authenticateUserService(email: string, password: string): Promise<string> {
  const httpBody = await findByEmailService(email);

  const user = httpBody.body;
  if (!user) throw new Error("Usuário ou senha invalida");

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) throw new Error("Usuário ou senha invalida");

  return generateToken(user);
}
