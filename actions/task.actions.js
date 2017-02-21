import axios from 'axios';

import WebAPI from '../utils/WebAPI';

export const ADD_TASK = 'ADD_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTask(id) {
    return {
        type: FETCH_TASK,
        payload: axios.get(`${WebAPI.FETCH_TASK}${id}`)
    }
}

export function fetchTaskSuccess(project) {
    return {
        type: `${FETCH_TASK}_FULFILLED`,
        payload: project
    };
}

export function addTask(props) {
    return {
        type: ADD_TASK,
        payload: axios.post(WebAPI.ADD_TASK, props)
    };
}

export function addTaskSuccess(newTask) {
    return {
        type: `${ADD_TASK}_SUCCESS`,
        payload: newTask
    };
}

export function fetchTasksByProjectId(projectId){
    return {
        type: `${FETCH_TASKS}`,
        payload: axios.get(WebAPI.FETCH_TASKS.replace(/\{.*?\}/, projectId))
    }
}