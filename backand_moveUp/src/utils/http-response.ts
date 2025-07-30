import { HttpResponse } from "../models/Http-response"

export const ok = async (data: any): Promise<HttpResponse> => {

    return {
        status: 200,
        body: data
    }
}

export const badRequest = async (): Promise<HttpResponse> => {

    return {
        status: 400,
        body: null
    }
}

export async function created(data:any): Promise<HttpResponse> {

    return {
        status: 201,
        body: data
    }
}