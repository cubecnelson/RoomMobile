import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../constants/colors';
import RoomList from './RoomListView';
import RoomModel from '../../models/RoomModel';
import RoomMapView from '../../components/RoomMapView';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { logout } from '../../store/actions/firebase';

interface Props {
    navigation: any;
    strings: any;
    setCurrLang: (lang: String) => {};
    dispatch: any;
    firebase: any;
}

interface State {
    roomList: RoomModel[];
}

class RoomListScreen extends Component<Props, State> {
    state = {
        roomList: [
            {
                roomId: 'room1',
                roomName: 'Room 1',
                users: [
                    {
                        userId: 'room1user1',
                        userName: 'Nelson Cheung'
                    },
                    {
                        userId: 'room1user2',
                        userName: 'Carrie Shin'
                    },
                    {
                        userId: 'room1user3',
                        userName: 'Jacky Ng'
                    },
                    {
                        userId: 'room1user4',
                        userName: 'David Cheng'
                    }
                ]
            },
            {
                roomId: 'room2',
                roomName: 'Room 2',
                users: [
                    {
                        userId: 'room2user1',
                        userName: 'Nelson Cheung'
                    },
                    {
                        userId: 'room2user2',
                        userName: 'Carrie Shin'
                    },
                    {
                        userId: 'room2user3',
                        userName: 'Jacky Ng'
                    },
                    {
                        userId: 'room2user4',
                        userName: 'David Cheng'
                    }
                ]
            },
            {
                roomId: 'room',
                roomName: 'Room 3',
                users: [
                    {
                        userId: 'room3user1',
                        userName: 'Nelson Cheung'
                    },
                    {
                        userId: 'room3user2',
                        userName: 'Carrie Shin'
                    },
                    {
                        userId: 'room3user3',
                        userName: 'Jacky Ng'
                    },
                    {
                        userId: 'room3user4',
                        userName: 'David Cheng'
                    }
                ]
            }
        ]
    };

    render() {
        console.log({ props: this.props });
        if (!this.props.firebase.logedIn) {
            this.props.navigation.navigate('Login');
        }
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.2 }}
                end={{ x: 0.6, y: 1 }}
                style={styles.container}
                colors={['rgb(35,56,70)', '#2f3f70']}
            >
                <RoomMapView
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        zIndex: 1
                    }}
                />

                <SafeAreaView
                    style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: Colors.TransBlack,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: Colors.PlainWhite,
                                alignSelf: 'center'
                            }}
                        >
                            Wtsup!!
                        </Text>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                height: '100%',
                                paddingHorizontal: 20,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                this.props.dispatch(logout());
                            }}
                        >
                            <Icon
                                name="user-circle"
                                size={25}
                                color={Colors.PlainWhite}
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <View style={{ flex: 1.5 }} />
                <SafeAreaView style={[styles.container]}>
                    <RoomList
                        navigation={this.props.navigation}
                        style={{ overflow: 'visible' }}
                        contentContainerStyle={{
                            padding: 15,
                            alignItems: 'flex-end'
                        }}
                        roomList={this.state.roomList}
                    />
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

const mapStateToProps = (state: any) => ({ ...state });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        zIndex: 3
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

export default connect(mapStateToProps)(RoomListScreen);
