import firebase from 'react-native-firebase';
import { Dispatch, AnyAction } from 'redux';
import { ActionTypes } from '.';
import { ThunkAction } from 'redux-thunk';
import { getUsers, getRooms } from '../../integrations/api/firebaseApi';

export const loginFirebaseWithEmail = (email: string, password: string) => {
    return (dispatch: any) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(credential => {
                firebase
                    .auth()
                    .currentUser!.getIdToken()
                    .then(token => console.log({ token }));
                dispatch(getRoomsFromFirebase());
                dispatch({
                    type: ActionTypes.LOGIN_FIREBASE_WITH_EMAIL
                });
            });
    };
};

export const getUsersFromFirebase = () => {
    return (dispatch: Dispatch) => {
        getUsers().then(response => {
            console.log(response);
        });
    };
};

export const getRoomsFromFirebase = () => {
    return (dispatch: Dispatch) => {
        getRooms().then(response => {
            console.log(response);
        });
    };
};
