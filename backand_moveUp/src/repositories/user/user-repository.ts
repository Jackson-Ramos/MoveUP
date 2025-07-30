import { PrismaClient } from "@prisma/client";
import { IUser } from "../../models/IUser";

const prisma = new PrismaClient();

export async function createUserRepository(data: IUser) {

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      active: data.active ?? true,
    },
  });
  return { message: 'successfully created' };
}

export async function findByEmailRepository(email: string): Promise<IUser | null> {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user;
}

export async function findAllStudentRepository(trainerId: string, activeStatus?: boolean){

  return prisma.student.findMany({
    where: {
      trainerId,
      user: activeStatus !== undefined ? { active: activeStatus } : undefined,
    },
    include: {
      user: true,
    }
  })

}