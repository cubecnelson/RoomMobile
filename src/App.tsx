/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import AppContainer from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import LoadingView from './components/RoomLoadingView';
import { multiLangManager } from './language/LanguageKit';
import firebase from 'react-native-firebase';

interface Props {}

multiLangManager.init();

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <StatusBar
                    backgroundColor={'#00000000'}
                    translucent
                    barStyle={'light-content'}
                />
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <LoadingView />
                    <AppContainer />
                </View>
            </Provider>
        );
    }
}
