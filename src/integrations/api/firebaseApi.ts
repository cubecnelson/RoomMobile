import axios from 'axios';
import firebase from 'react-native-firebase';

const TIMEOUT = 10000;

const instance = axios.create({
    baseURL: 'https://us-central1-room-77733.cloudfunctions.net/api/',
    timeout: TIMEOUT
});

instance.interceptors.request.use(
    function(config) {
        if (!firebase.auth().currentUser) return config;
        return firebase
            .auth()
            .currentUser!.getIdToken()
            .then(token => {
                config.headers.common['Authorization'] = token;
                return config;
            });
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export const getUsers = () => instance.get('/users');

export const getRooms = () => instance.get('/rooms');
