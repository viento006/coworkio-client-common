import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const FETCH_PROFILES = 'FETCH_PROFILES';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FETCH_PROFILE = 'FETCH_PROFILE';


export function fetchProfile(id) {
    return {
        type: FETCH_PROFILE,
        payload: axios.get(`${WebAPI.FETCH_USER_PROFILE}${id?id:""}`)
    }
}

export function fetchProfileSuccess(profile) {
    return {
        type: `${FETCH_PROFILE}_FULFILLED`,
        payload: profile
    };
}

export function createProfile(props) {
    return {
        type: CREATE_PROFILE,
        payload: axios.post(WebAPI.UPDATE_USER_PROFILE, props)
    };
}

export function createProfileSuccess(newProfile) {
    return {
        type: `${CREATE_PROFILE}_SUCCESS`,
        payload: newProfile
    };
}