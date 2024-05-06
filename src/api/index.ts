import request from '../utils/request'

enum API {
    ping = '/api/ping',
    userLogin = '/api/login',
    userLogout = '/api/user/logout',
    userRegister = '/api/register',

}

export const pingTest = () =>
    request.get<any, any>(API.ping)

export const userLogin = (data: any) =>
    request.post<any, any>(API.userLogin,data)

export const userLogout = () =>
    request.post<any, any>(API.userLogout)

export const userRegister =(data: any)=>
    request.post<any, any>(API.userRegister,data)


