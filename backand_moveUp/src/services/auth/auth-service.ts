import { compare } from "bcrypt";
import { generateToken } from "../../auth/generateToken";
import { findByEmailRepository } from "../../repositories/user/user-repository";

export async function authenticateUserService(email: string, password: string): Promise<string> {
  const user = await findByEmailRepository(email)

  if (!user) throw new Error("Usuário ou senha invalida");

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) throw new Error("Usuário ou senha invalida");

  return generateToken(user);
}
