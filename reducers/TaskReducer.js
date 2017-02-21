import { FETCH_TASKS, FETCH_TASK, ADD_TASK } from '../actions/TaskActions';

const INITIAL_STATE = { 
    tasksList: {tasks: [], error:null, loading: false},  
    newTask:{task:null, error: null, loading: false}, 
    activeTask:{task:null, error:null, loading: false} 
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case FETCH_TASKS:
  	        return { ...state, tasksList: { tasks:[], error: null, loading: true } }; 
        case `${FETCH_TASKS}_FULFILLED`:
            return { ...state, tasksList: {tasks: action.payload.data, error:null, loading: false} };
        case `${FETCH_TASKS}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, tasksList: {tasks: [], error: error, loading: false} };
 
        case FETCH_TASK:
            return { ...state, activeTask:{...state.activeTask, loading: true}};
        case `${FETCH_TASK}_FULFILLED`:
            return { ...state, activeTask: {task: action.payload.data, error:null, loading: false}};
        case `${FETCH_TASK}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, activeTask: {task: null, error:error, loading:false}};

        case ADD_TASK:
            return {...state, newTask: {...state.newTask, loading: true}}
        case `${ADD_TASK}_FULFILLED`:
            return {...state, newTask: {task:action.payload.data, error:null, loading: false}}
        case `${ADD_TASK}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return {...state, newTask: {task:null, error:error, loading: false}}

        default:
            return state;
    }

};

export default taskReducer;