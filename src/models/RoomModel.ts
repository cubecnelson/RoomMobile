import UserModel from './UserModel';

export default interface RoomModel {
    roomId: string;
    roomName: string;
    users: UserModel[];
}
