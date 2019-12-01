import { ActionTypes, Action } from '../actions';

export default function firebase(state = { logedIn: false }, action: Action) {
    switch (action.type) {
        case ActionTypes.LOGIN_FIREBASE_WITH_EMAIL:
            return { ...state, logedIn: true };
        case ActionTypes.LOGOUT_FIREBASE:
            return { logedIn: false };
        default:
            return state;
    }
}
