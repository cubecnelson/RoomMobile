import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Transition } from 'react-navigation-fluid-transitions';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { loginFirebaseWithEmail } from '../store/actions/firebase';
import BlueButton from '../components/RoomButton';
import { Colors } from '../constants/colors';
import { withMultiLang } from '../language/LanguageKit';

interface Props {
    navigation: any;
    strings: any;
    setCurrLang: (lang: String) => {};
    dispatch: any;
    logedIn: boolean;
}

class LoginScreen extends Component<Props> {
    render() {
        if (this.props.logedIn) {
            this.props.navigation.navigate('RoomList');
        }
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.8, y: 0.8 }}
                style={styles.container}
                colors={['rgb(35,56,70)', '#2f3f70']}
            >
                <SafeAreaView style={[styles.container]}>
                    <View style={styles.container}>
                        <Transition appear="top" disappear="top">
                            <Icon
                                style={{ alignSelf: 'center' }}
                                name="dice-five"
                                size={150}
                                color={Colors.PrimaryBlue}
                            />
                        </Transition>

                        <View>
                            <Transition appear="flip" disappear="top">
                                <BlueButton.PrimaryFill
                                    title={this.props.strings.login}
                                    onPress={() => {
                                        this.props.dispatch(
                                            loginFirebaseWithEmail(
                                                'cubecnelson@gmail.com',
                                                'secretPassword'
                                            )
                                        );
                                    }}
                                />
                            </Transition>

                            <Transition appear="flip" disappear="top">
                                <BlueButton.PrimaryBorder
                                    title={this.props.strings.register}
                                />
                            </Transition>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        logedIn: state.firebase.logedIn
    };
};

export default connect(mapStateToProps)(withMultiLang(LoginScreen));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    commonText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
