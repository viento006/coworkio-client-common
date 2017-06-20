import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FIND_PROJECT = 'FIND_PROJECT';

export function fetchProject(id) {
    return {
        type: FETCH_PROJECT,
        payload: axios.get(`${WebAPI.FETCH_PROJECT}/${id}`)
    }
}

export function fetchProjectSuccess(project) {
    return {
        type: `${FETCH_PROJECT}_FULFILLED`,
        payload: project
    };
}

export function createProject(props) {
    return {
        type: CREATE_PROJECT,
        payload: axios.post(WebAPI.CREATE_PROJECT, props)
    };
}

export function createPostSuccess(newProject) {
    return {
        type: `${CREATE_PROJECT}_SUCCESS`,
        payload: newProject
    };
}

export function findProject(searchString) {
    return {
        type: FIND_PROJECT,
        payload: axios.get(WebAPI.FIND_PROJECT, {params:{title: searchString}})
    };
}