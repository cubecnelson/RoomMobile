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
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './navigation';
import store from './store';
import LoadingView from './components/RoomLoadingView';
import { multiLangManager } from './language/LanguageKit';

interface Props {}

multiLangManager.init();

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <StatusBar
                    backgroundColor="#00000000"
                    translucent
                    barStyle="dark-content"
                />
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <LoadingView />
                    <AppContainer />
                </View>
            </Provider>
        );
    }
}
