import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

/* login */
export function loginUser (credentials) {
    return {
        type: LOGIN_USER,
        payload: axios.post(WebAPI.ACCOUNT_LOGIN, credentials,  {
            params: credentials
        })
    }
}

export function logoutUser () {
    return {
        type: LOGOUT_USER,
        payload: ''
    }
}

/* registration */
export function registerUser (formValues) {
    return {
        type: REGISTER_USER,
        payload:  axios.post(WebAPI.ACCOUNT_REGISTER, formValues)

    }
}