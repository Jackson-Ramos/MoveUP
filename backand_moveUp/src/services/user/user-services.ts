import * as bcrypt from "bcrypt";

import { IUser } from "../../models/IUser";
import { createUserRepository, findAllStudentRepository } from "../../repositories/user/user-repository";
import { badRequest, created, ok } from "../../utils/http-response";

export async function createUserService(user: IUser) {

    if (Object.keys(user).length === 0) return badRequest();

    user.password = await bcrypt.hash(user.password, 10);
    const response = await createUserRepository(user);
    return created(response);
}

export async function findAllStudentService(trainerId: string, status: string) {

    let response;
    let activeFilter: boolean | undefined;

    switch (status) {
        case 'active':
            activeFilter = true
            break;
        case 'inactive':
            activeFilter = false
            break;
        case 'all':
            activeFilter = undefined;
            break;
    }

    const students = await  findAllStudentRepository(trainerId, activeFilter);

    return response = await ok(students)
}
