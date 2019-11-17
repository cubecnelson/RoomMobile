
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import enStrings from './strings/en.json';
import tcStrings from './strings/tc.json';
import scStrings from './strings/sc.json';

const LANGUAGE_STORE_KEY = 'LANGUAGE_STORE_KEY';

class MultiLangManager {
    
    localizedStrings: LocalizedStringsMethods;
    registeredComponents: any[] = [];

    constructor() {
        this.localizedStrings = new LocalizedStrings({
            en: enStrings,
            tc: tcStrings,
            sc: scStrings
        });
        
    }

    init = async () => {
        return AsyncStorage.getItem(LANGUAGE_STORE_KEY).then(
            value => {
                console.log({value})
                if (value) {
                    this.setCurrLang(value as String);
                } else {
                    this.setCurrLang(this.localizedStrings.getInterfaceLanguage());
                }
            }
        )
    }

    getCurrLang = () => {
        return this.localizedStrings.getLanguage();
    }

    setCurrLang = (langKey: String) => {
        if (this.localizedStrings) {
            this.localizedStrings.setLanguage(langKey as string);
            this.registeredComponents.forEach(component => {
                component.setDisplayLang(langKey);
            });

            AsyncStorage.setItem(LANGUAGE_STORE_KEY, langKey as string);
        }
        
    }

    registerComponent(component: any) {
        this.registeredComponents.push(component);
    }

    deregisterComponent(component: any) {
        for( var i = 0; i < this.registeredComponents.length; i++){ 
            if (this.registeredComponents[i] === component) {
                this.registeredComponents.splice(i, 1); 
            }
         }
    }

}

export const multiLangManager = new MultiLangManager();

interface MultiLangState {
    langKey: any;
}

export const withMultiLang = (WrappedComponent: any) => {

    return class extends Component<any,MultiLangState> {

        static navigationOptions = {
            ...WrappedComponent.navigationOptions
        }

        state = {
            langKey: multiLangManager.getCurrLang()
        }

        componentDidMount = () => {
            multiLangManager.registerComponent(this);
        }

        componentWillUnmount = () => {
            multiLangManager.deregisterComponent(this);
        }

        setCurrLang = (langKey: String) => {
            multiLangManager.setCurrLang(langKey);
        }

        setDisplayLang = (langKey: String) => {
            if (this.state.langKey === langKey) 
                return;
            this.setState({
                langKey
            })
        }

        render = () => {
          return <WrappedComponent langKey={this.state.langKey} setCurrLang={this.setCurrLang} strings={multiLangManager.localizedStrings} {...this.props}/>
        }
      }
    
}