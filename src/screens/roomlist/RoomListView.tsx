import React from 'react';
import { ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RoomListItem from './RoomListItemView';
import RoomModel from '../../models/RoomModel';

export interface RoomListProps {
    navigation: any;
    roomList: RoomModel[];
    contentContainerStyle: ViewStyle;
    style: ViewStyle;
}

const RoomList = (props: RoomListProps) => {
    return (
        <FlatList
            horizontal={true}
            decelerationRate={0}
            snapToInterval={310}
            snapToAlignment={'center'}
            style={props.style}
            contentContainerStyle={props.contentContainerStyle}
            data={props.roomList}
            renderItem={item => (
                <RoomListItem navigation={props.navigation} room={item.item} />
            )}
        />
    );
};

export default RoomList;
