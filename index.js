/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// register
AppRegistry.registerComponent(appName, () => App);
