import request from '../utils/request'

enum API {
    ping = '/api/ping',
    userLogin = '/api/login',
}

export const pingTest = () =>
    request.get<any, any>(API.ping)

export const userLogin = (data: any) =>
    request.post<any, any>(API.userLogin,data)