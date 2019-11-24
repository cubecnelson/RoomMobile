import { ActionTypes, Action } from '../actions';

export default function common(state = { loading: false }, action: Action) {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            console.log({ action });
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
