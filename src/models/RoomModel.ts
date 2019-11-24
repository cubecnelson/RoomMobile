import UserModel from './UserModel';

interface RoomModel {
    roomId: string;
    roomName: string;
    users: UserModel[];
}

export default RoomModel;
