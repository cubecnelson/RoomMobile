import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { Colors } from '../../constants/colors';
import { getNameInitials } from '../../utils/stringUtils';
import RoomModel from '../../models/RoomModel';

export interface RoomListItemProps {
    navigation: any;
    room: RoomModel;
}

export default (props: RoomListItemProps) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Room', { room: props.room });
            }}
            style={{ alignSelf: 'stretch', width: 300, margin: 5 }}
        >
            <Transition shared={props.room.roomId}>
                <View
                    style={{
                        backgroundColor: Colors.TransBlack,
                        width: '100%',
                        height: '100%',
                        borderRadius: 15
                    }}
                />
            </Transition>
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    alignContent: 'center'
                }}
            >
                <Text style={{ padding: 15, color: Colors.PlainWhite }}>
                    {props.room.roomName}
                </Text>

                <View
                    style={{
                        borderRadius: 15,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {props.room.users.map(user => (
                        <Transition shared={user.userId}>
                            <View style={styles.initialsContainer}>
                                <Text style={styles.initials}>
                                    {getNameInitials(user.userName)}
                                </Text>
                            </View>
                        </Transition>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
    commonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.PlainWhite,
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
        alignItems: 'center',
        zIndex: 99
    }
});
