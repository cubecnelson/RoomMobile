import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RoomScreen from '../screens/RoomScreen';
import RoomListScreen from '../screens/roomlist/RoomListScreen';

const AuthStack = FluidNavigator(
    {
        Login: {
            screen: LoginScreen
        },
        RoomList: {
            screen: RoomListScreen
        },
        Room: {
            screen: RoomScreen
        }
    },
    {
        initialRouteName: 'Login'
    }
);

const MainStack = createStackNavigator(
    {
        Home: {
            screen: AuthStack,
            navigationOptions: ({}) => ({
                header: null
            })
        }
    },
    {}
);

const AppNavigator = createSwitchNavigator(
    {
        Splash: HomeScreen,
        Main: MainStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Main'
    }
);

export default createAppContainer(AppNavigator);
