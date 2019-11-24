import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

interface Props {
    dispatch: any;
}

class HomeScreen extends Component<Props> {
    componentDidMount = () => {};

    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>
                    To get started, edit App.tsx
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export const mapStateToProps = (state: any) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(HomeScreen);
