import { combineReducers } from 'redux';
import common from './common';
import firebase from './firebase';

export default combineReducers({common, firebase})