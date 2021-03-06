import React, { Component } from 'react';
import {
    Text,
    ViewStyle,
    StyleSheet,
    TouchableOpacity,
    TextStyle
} from 'react-native';
import { Colors } from '../constants/colors';

interface ButtonProps {
    onPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    title: String;
    containerStyle?: ViewStyle;
}

interface BaseButtonProps extends ButtonProps {
    containerStyle?: ViewStyle;
    activeContainerStyle?: ViewStyle;
    activeTextStyle?: TextStyle;
    textStyle?: TextStyle;
    underlayColor?: string;
    activeOpacity?: number;
}

interface BaseButtonState {
    active: Boolean;
}

const styles = StyleSheet.create({
    buttonContainerBase: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    buttonTextBase: {
        padding: 10,
        fontSize: 18
    }
});

class Base extends Component<BaseButtonProps, BaseButtonState> {
    state = {
        active: false
    };

    render = () => {
        return (
            <TouchableOpacity
                activeOpacity={
                    this.props.activeOpacity ? this.props.activeOpacity : 1
                }
                style={[
                    styles.buttonContainerBase,
                    this.props.containerStyle,
                    this.state.active ? this.props.activeContainerStyle : {}
                ]}
                onPressIn={() => {
                    this.setState({ active: true });
                    if (this.props.onPressIn) this.props.onPressIn();
                }}
                onPressOut={() => {
                    this.setState({ active: false });
                    if (this.props.onPressOut) this.props.onPressOut();
                }}
                onPress={this.props.onPress}
            >
                <Text
                    style={[
                        styles.buttonTextBase,
                        this.props.textStyle,
                        this.state.active ? this.props.activeTextStyle : {}
                    ]}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    };
}

const PrimaryFill = (props: ButtonProps) => {
    return (
        <Base
            activeContainerStyle={{ backgroundColor: 'transparent' }}
            activeTextStyle={{ color: Colors.PrimaryBlue }}
            textStyle={{ color: Colors.PlainWhite }}
            containerStyle={{
                backgroundColor: Colors.PrimaryBlue,
                borderRadius: 5
            }}
            {...props}
        />
    );
};

const PrimaryBorder = (props: ButtonProps) => {
    return (
        <Base
            activeOpacity={0.3}
            textStyle={{ color: Colors.PrimaryBlue }}
            containerStyle={{
                borderColor: Colors.PrimaryBlue,
                borderWidth: 1,
                borderRadius: 5
            }}
            {...props}
        />
    );
};

export default { PrimaryFill, PrimaryBorder };
