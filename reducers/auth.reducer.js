import { LOGOUT_USER, LOGIN_USER, REGISTER_USER }  from '../actions/auth.actions';

const INITIAL_STATE = {
    isPending: false,
    status: null,
    error: null
};

const auth = (state = INITIAL_STATE, action) => {

    switch( action.type ){
        case `${LOGIN_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true,
                status: null,
                error: null,
                token: null
            });
        case `${LOGIN_USER}_FULFILLED`:
            let token = action.payload.data.token;
            return Object.assign({}, state, {
                isPending: false,
                token,
                isSuccessful: true,
                status: "authenticated"
            });
        case `${LOGIN_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                token: null,
                isSuccessful: false,
                status: 'error',
            });

        case `${REGISTER_USER}_PENDING` :
            return Object.assign({}, state, {
                isPending: true,
                status: ''
            });
        case `${REGISTER_USER}_FULFILLED` :
            return Object.assign({}, state, {
                isPending: false,
                isSuccessful: action.payload.status == 200,
                status: ''
            });
        case `${REGISTER_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                isSuccessful: action.payload.message == true,
                status: 'error'
            });
        default:
            return state;
    }
};

export default auth;