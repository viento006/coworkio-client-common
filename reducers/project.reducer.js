import { FETCH_PROJECTS, FETCH_PROJECT, CREATE_PROJECT, FIND_PROJECT } from '../actions/project.actions';

const INITIAL_STATE = { 
    projectsList: {projects: [], error:null, loading: false},
    foundProjects: {projects: [], error:null, loading: false},
    newProject:{projectID:null, error: null, loading: false},
    activeProject:{project:null, error:null, loading: false}, 
};

const projectReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case `${FETCH_PROJECTS}_PENDING`:
  	        return { ...state, projectsList: { projects:[], error: null, loading: true } }; 
        case `${FETCH_PROJECTS}_FULFILLED`:
            return { ...state, projectsList: {projects: action.payload.data, error:null, loading: false} };
        case `${FETCH_PROJECTS}_REJECTED`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, projectsList: {projects: [], error: error, loading: false} };

        case `${FETCH_PROJECT}_PENDING`:
            return { ...state, activeProject:{...state.activeProject, loading: true}};
        case `${FETCH_PROJECT}_FULFILLED`:
            return { ...state, activeProject: {project: action.payload.data, error:null, loading: false}};
        case `${FETCH_PROJECT}_REJECTED`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, activeProject: {project: null, error:error, loading:false}};

        case `${CREATE_PROJECT}_PENDING`:
            return {...state, newProject: {...state.newProject, loading: true}}
        case `${CREATE_PROJECT}_FULFILLED`:
            return {...state, newProject: {projectID:action.payload.data, error:null, loading: false}}
        case `${CREATE_PROJECT}_REJECTED`:
            error = action.payload.data || {message: action.payload.message};
            return {...state, newProject: {projectID:null, error:error, loading: false}}

        case `${FIND_PROJECT}_PENDING`:
            return {...state, foundProjects: {...state.foundProjects, loading: true, error:null}}
        case `${FIND_PROJECT}_FULFILLED`:
            return {...state, foundProjects: {projects:action.payload.data, error:null, loading: false}}
        case `${FIND_PROJECT}_REJECTED`:
            error = action.payload.data || {message: action.payload.message};
            return {...state, foundProjects: {projects:[], error:error, loading: false}}

        default:
            return state;
    }

};

export default projectReducer;