import * as Actions  from './AuthActions';

const INITIAL_STATE = {
    isPending: false,
    status: null,
    error: null
};

const auth = (state = INITIAL_STATE, action) => {

    switch( action.type ){

        case  `${Actions.LOGIN_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true
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
                token: "asdasd",
                error: null
            });

        case `${Actions.REGISTER_USER}_PENDING` :
            return Object.assign({}, state, {
                isPending: true
            });

        case `${Actions.REGISTER_USER}_FULFILLED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.data
            });

        case `${Actions.REGISTER_USER}_REJECTED` :
            return Object.assign({}, state, {
                isPending: false,
                isSucceeded: action.payload.message
            });
        default:
            return state;
    }

};

export default auth;