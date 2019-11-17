import { ActionTypes } from "../actions";
import { Action } from "../actions";

export default function firebase(state = {logedIn: false}, action: Action) {
    switch (action.type) {
        case ActionTypes.LOGIN_FIREBASE_WITH_EMAIL: 
        return {...state, logedIn: true}
      default:
        return state;
    }
}