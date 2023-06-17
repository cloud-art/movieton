import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"

export const registration = async (username: string, email: string, password: string, name: string, surname: string) => {
    const {data} = await $host.post('api/user/registration', {username, email, password, name, surname, role: "USER"})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (username: string, password: string) => {
    const {data} = await $host.post('api/user/login', {username, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}