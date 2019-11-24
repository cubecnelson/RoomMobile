import UserModel from './UserModel';

export type RoomModel = {
    roomId: string;
    roomName: string;
    users: UserModel[];
};
