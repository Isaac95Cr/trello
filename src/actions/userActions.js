export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNIN = 'SIGNIN'

export function login(email, password) {
    return { type: LOGIN, email, password }
}
export function logout() {
    return { type: LOGOUT, }

} export function signin(name, email, password) {
    return { type: SIGNIN, name, email, password }
}