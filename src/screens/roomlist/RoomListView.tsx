import React from 'react'
import RoomListItem from './RoomListItemView';
import { ViewStyle } from 'react-native';
import RoomModel from '../../models/RoomModel';
import { FlatList } from 'react-native-gesture-handler';


export interface RoomListProps {
    navigation: any;
    roomList: RoomModel[];
    contentContainerStyle: ViewStyle;
    style: ViewStyle;
}

const RoomList = (props: RoomListProps) =>{
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            style={props.style}
            contentContainerStyle={props.contentContainerStyle}
            data={props.roomList}
            renderItem={(item) => 
                (<RoomListItem
                    navigation={props.navigation}
                    room={item.item}/>
                )}
        />
)}

export default RoomList