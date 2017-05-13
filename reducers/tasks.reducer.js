import { FETCH_TASKS, FETCH_TASK, ADD_TASK, UPDATE_TASK } from '../actions/task.actions';

const INITIAL_STATE = { 
    tasksList: {tasks: [], error:null, loading: false},
    newTask:{task:null, error: null, loading: false},
    activeTask:{task:null, error:null, loading: false}
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case `${FETCH_TASKS}_PENDING`:
  	        return { ...state, tasksList: { tasks:[], error: null, loading: true } }; 
        case `${FETCH_TASKS}_FULFILLED`:
            return { ...state, tasksList: {tasks: action.payload.data, error:null, loading: false} };
        case `${FETCH_TASKS}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, tasksList: {tasks: [], error: error, loading: false} };
 
        case `${FETCH_TASK}_PENDING`:
            return { ...state, activeTask:{...state.activeTask, loading: true}};
        case `${FETCH_TASK}_FULFILLED`:
            return { ...state, activeTask: {task: action.payload.data, error:null, loading: false}};
        case `${FETCH_TASK}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, activeTask: {task: null, error:error, loading:false}};

        case `${ADD_TASK}_PENDING`:
            return {...state, newTask: {...state.newTask, loading: true}}
        case `${ADD_TASK}_FULFILLED`:
            return {...state, newTask: {task:action.payload.data, error:null, loading: false},
                tasksList: {...state.tasksList, tasks: [...state.tasksList.tasks, action.payload.data]}}
        case `${ADD_TASK}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return {...state, newTask: {task:null, error:error, loading: false}}

        case `${UPDATE_TASK}`:
            return {...state, updatedTask: {task: action.payload.data, loading: true}}
        case `${UPDATE_TASK}_FULFILLED`:
            let tasks = state.tasksList.tasks.filter((task)=> task.id !== action.payload.data.id);
            return {...state,  tasksList: {...state.tasksList, tasks: [...tasks, action.payload.data]}, 
                updatedTask: {task:action.payload.data, error:null, loading: false}}
        case `${UPDATE_TASK}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return {...state, updatedTask: {task:null, error:error, loading: false}}

        default:
            return state;
    }

};

export default taskReducer;