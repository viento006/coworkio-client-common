import { FETCH_PROFILES, FETCH_PROFILE, UPSERT_PROFILE } from '../actions/profile.actions';

const INITIAL_STATE = { 
    profilesList: {profiles: [], error:null, loading: false},  
    newProfile: {profileId:null, error: null, loading: false}, 
    activeProfile: {profile:null, error:null, loading: false}, 
}; 

const profileReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case `${FETCH_PROFILES}_PENDING`:
  	        return { ...state, profilesList: { profiles:[], error: null, loading: true } };
        case `${FETCH_PROFILES}_FULFILLED`:
            return { ...state, profilesList: { profiles: action.payload.data, error:null, loading: false } };
        case `${FETCH_PROFILES}_REJECTED`:
            error = action.payload.data || {message: action.payload.message};
            return { ...state, profilesList: { profiles: [], error: error, loading: false } };

        case `${FETCH_PROFILE}_PENDING`:
            return { ...state, activeProfile:{ ...state.activeProfile, loading: true }};
        case `${FETCH_PROFILE}_FULFILLED`:
            return { ...state, activeProfile: { profile: action.payload.data, error:null, loading: false }, newProfile: INITIAL_STATE.newProfile};
        case `${FETCH_PROFILE}_REJECTED`:
            error = action.payload.data || { message: action.payload.message };
            return { ...state, activeProfile: {profile: null, error:error, loading:false }};

        case `${UPSERT_PROFILE}_PENDING`:
            return {...state, newProfile: { ...state.newProfile, loading: true }}
        case `${UPSERT_PROFILE}_FULFILLED`:
            return {...state, newProfile: { profileId:action.payload.data, error:null, loading: false }}
        case `${UPSERT_PROFILE}_REJECTED`:
            error = action.payload.data || { message: action.payload.message };
            return {...state, newProfile: { profileId:null, error:error, loading: false }}

        default:
            return state;
    }

};

export default profileReducer;