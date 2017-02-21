import { FETCH_PROJECTS_BY_USER } from '../actions/DashboardActions';
const INITIAL_STATE = {
    projectsList: {projects: [], error:null, loading: false}
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case FETCH_PROJECTS_BY_USER:
            return { ...state, projectsList:{projects: [], error:null, loading: true}};
        case `${FETCH_PROJECTS_BY_USER}_FULFILLED`:
            return { ...state, projectsList: {projects: action.payload.data, error:null, loading: false}};
        case `${FETCH_PROJECTS_BY_USER}_FAILURE`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, projectsList: {projects: null, error:error, loading:false}};
        default:
            return state;
    }

};

export default dashboardReducer;