import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { IUser } from "../../models/IUser";

const prisma = new PrismaClient();

export async function createUserRepository(data: IUser) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role,
            active: data.active ?? true,
        },
    });
    return {message: 'successfully created'};
}

export async function findByEmail(email: string): Promise<IUser | null> {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user;
}