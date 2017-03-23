import * as Actions  from '../actions/auth.actions';

const INITIAL_STATE = {
    isPending: false,
    status: null,
    error: null
};

const auth = (state = INITIAL_STATE, action) => {

    switch( action.type ){

        case  `${Actions.LOGIN_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true,
                status: ''
            });

        case `${Actions.LOGIN_USER}_FULFILLED`:
            let token = action.payload.data.token;

            localStorage.setItem('token', token);

            return Object.assign({}, state, {
                isPending: false,
                token,
                error: null,
                status: "authenticated"
            });
        case `${Actions.LOGIN_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                token: null,
                error: null,
                status: ''
            });

        case `${Actions.REGISTER_USER}_PENDING` :
            return Object.assign({}, state, {
                isPending: true,
                status: ''
            });

        case `${Actions.REGISTER_USER}_FULFILLED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.data == true,
                status: ''
            });

        case `${Actions.REGISTER_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.message == true,
                status: ''
            });
        default:
            return state;
    }
};

export default auth;