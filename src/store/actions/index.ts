export interface Action {
    type: ActionTypes;
    payload: any;
}

export enum ActionTypes {
    SET_LOADING,
    SET_USER,
    LOGIN_FIREBASE_WITH_EMAIL,
    LOGIN_FIREBASE_WITH_GOOGLE,
    LOGIN_FIREBASE_WITH_FACEBOOK
}
