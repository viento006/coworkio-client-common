import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const FETCH_PROFILES = 'FETCH_PROFILES';
export const UPSERT_PROFILE = 'UPSERT_PROFILE';
export const FETCH_PROFILE = 'FETCH_PROFILE';

export function getUsersProfiles() {
    return {
        type: FETCH_PROFILES,
        payload: axios.get(`${WebAPI.FETCH_PROFILES}`)
    }
}

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

export function upsertProfile(props) {
    return {
        type: UPSERT_PROFILE,
        payload: axios.post(WebAPI.UPSERT_USER_PROFILE, props)
    };
}

export function upsertProfileSuccess(newProfile) {
    return {
        type: `${UPSERT_PROFILE}_SUCCESS`,
        payload: newProfile
    };
}