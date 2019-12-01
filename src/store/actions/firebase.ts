import firebase from 'react-native-firebase';
import { ActionTypes } from '.';
import { getUsers, getRooms } from '../../integrations/api/firebaseApi';

export const loginFirebaseWithEmail = (email: string, password: string) => {
    return (dispatch: any) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
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

export const logout = () => {
    return (dispatch: any) => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: ActionTypes.LOGOUT_FIREBASE
                });
            });
    };
};

export const getUsersFromFirebase = () => {
    return () => {
        getUsers().then(response => {
            console.log(response);
        });
    };
};

export const getRoomsFromFirebase = () => {
    return () => {
        getRooms().then(response => {
            console.log(response);
        });
    };
};
