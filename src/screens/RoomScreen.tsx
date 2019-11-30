import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../constants/colors';
import { getNameInitials } from '../utils/stringUtils';
import RoomModel from '../models/RoomModel';
import UserModel from '../models/UserModel';
import RoomDivider from '../components/RoomDivider';

interface Props {
    navigation: any;
    strings: any;
    setCurrLang: (lang: String) => {};
    room: RoomModel;
}

class RoomScreen extends Component<Props> {
    render() {
        const room = this.props.navigation.getParam('room', {});
        console.log({ room });
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.8, y: 0.8 }}
                style={styles.container}
                colors={['#381f56', '#2f3f70']}
            >
                <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
                    <Transition shared={room.roomId}>
                        <View
                            style={{
                                backgroundColor: Colors.TransBlack,
                                flex: 1,
                                alignSelf: 'stretch',
                                margin: 10,
                                borderRadius: 15,
                                flexDirection: 'column'
                            }}
                        >
                            <View style={{ flex: 1, padding: 15 }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: Colors.PlainWhite
                                    }}
                                >
                                    {room.roomName}
                                </Text>
                            </View>
                            <RoomDivider />
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignSelf: 'stretch',
                                    height: 40,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    marginBottom: 10
                                }}
                            >
                                <Text style={{ color: Colors.PlainWhite }}>
                                    I'm in!!!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Transition>
                    <Transition appear="bottom">
                        <TouchableOpacity
                            style={{ alignSelf: 'stretch' }}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        >
                            <Icon
                                style={{
                                    alignSelf: 'center',
                                    transform: [{ rotate: '-180deg' }]
                                }}
                                name="angle-up"
                                size={30}
                                color="grey"
                            />
                        </TouchableOpacity>
                    </Transition>
                    <View
                        style={[
                            {
                                width: '100%',
                                alignSelf: 'flex-end',
                                marginTop: 10
                            }
                        ]}
                    >
                        <SafeAreaView>
                            {room.users.map((user: UserModel) => {
                                return this.renderUserItem(user);
                            })}
                        </SafeAreaView>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    renderUserItem = (user: UserModel) => {
        return (
            <View
                style={{
                    height: 100,
                    marginRight: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    flexDirection: 'row'
                }}
            >
                <Transition appear="flip">
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignSelf: 'stretch',
                            borderColor: 'grey',
                            borderRadius: 15,
                            backgroundColor: Colors.TransBlack
                        }}
                    />
                </Transition>
                <View
                    style={{
                        padding: 10,
                        flexDirection: 'row',
                        position: 'absolute'
                    }}
                >
                    <Transition shared={user.userId}>
                        <View style={styles.initialsContainer}>
                            <Text style={styles.initials}>
                                {getNameInitials(user.userName)}
                            </Text>
                        </View>
                    </Transition>
                    <View style={{ padding: 10 }}>
                        <Text
                            style={{
                                color: Colors.PlainWhite
                            }}
                        >
                            {user.userName}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    commonText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    initials: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    initialsContainer: {
        borderRadius: 25,
        width: 50,
        height: 50,
        backgroundColor: Colors.PrimaryBlue,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state: any) => ({ ...state });

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomScreen);
