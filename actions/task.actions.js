import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTask(id) {
    return {
        type: FETCH_TASK,
        payload: axios.get(`${WebAPI.FETCH_TASK}${id}`)
    }
}

export function addTask(props) {
    return {
        type: ADD_TASK,
        payload: axios.post(WebAPI.ADD_TASK, props)
    };
}

export function updateTask(props) {
    return {
        type: UPDATE_TASK,
        payload: axios.post(WebAPI.UPDATE_TASK, props)
    };
}

export function fetchTasksByProjectId(projectId){
    return {
        type: `${FETCH_TASKS}`,
        payload: axios.get(WebAPI.FETCH_TASKS.replace(/\{.*?\}/, projectId))
    }
}