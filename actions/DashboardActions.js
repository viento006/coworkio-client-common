import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const FETCH_PROJECTS_BY_USER = 'FETCH_PROJECTS_BY_USER';


export function fetchProjectsByUser() {
    return {
        type: FETCH_PROJECTS_BY_USER,
        payload: axios.get(`${WebAPI.FETCH_PROJECTS_BY_USER}`)
    }
}

export function fetchProjectsByUserSuccess(project) {
    return {
        type: `${FETCH_PROJECTS_BY_USER}_FULFILLED`,
        payload: project
    };
}

export function fetchProjectsByUserFailure(err) {
    return {
        type: `${FETCH_PROJECTS_BY_USER}_FAILURE`,
        payload: err
    };
}