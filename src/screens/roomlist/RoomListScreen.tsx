import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../constants/colors';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import RoomList from './RoomListView';
import RoomModel from '../../models/RoomModel';


interface Props {
    navigation: any;
    strings: any;
    setCurrLang: (lang:String) => {};
}

interface State {
    roomList: RoomModel[];
}

const customMapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a7fa6"
            },
            {
                "gamma": "1.10"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#444f67"
            },
            {
                "weight": "4.00"
            },
            {
                "gamma": "0.85"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "1.00"
            },
            {
                "saturation": "-56"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1.00"
            },
            {
                "hue": "#ff009b"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#a06d8c"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#444f67"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#444f67"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#558684"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#444f67"
            },
            {
                "gamma": "0.85"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#444f67"
            },
            {
                "gamma": "1.15"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a06d8c"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a06d8c"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a06d8c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#444f67"
            },
            {
                "gamma": "0.80"
            }
        ]
    }
]


export class RoomListScreen extends Component<Props, State> {
    
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
                    ],
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
                    ],
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
                    ],
                },
        ]
    }


    render() {
        return (
            <LinearGradient 
              start={{x: 0.0, y: 0.2}} end={{x: 0.6, y: 1}} 
              style={styles.container} colors={['#381f56', '#2f3f70']} >
               
                <View style={{flex: 2}}>
                    {/* <RoomList /> */}
                </View>
                <MapView
                            provider={PROVIDER_GOOGLE} 
                            style={{width: '100%', height: '100%', position: 'absolute',}}
                            initialRegion={{
                                latitude: 22.3193,
                                longitude: 114.1694,
                                latitudeDelta: 0.4,
                                longitudeDelta: 0.4,
                            }}
                            customMapStyle={customMapStyle}
                        />
                        
                <SafeAreaView style={[styles.container]}>
                    <RoomList
                        navigation={this.props.navigation}
                        style={{overflow: 'visible'}}
                        contentContainerStyle={{padding: 15, alignItems: 'flex-end'}}
                        roomList={this.state.roomList}
                        />

                </SafeAreaView>
            </LinearGradient>
        )
    }
}

const mapStateToProps = (state: any) => ({
    
})

const mapDispatchToProps = {
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch'
    },
    commonText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
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
        backgroundColor: Colors.PrimarySalmon,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }
  });

export default connect(mapStateToProps, mapDispatchToProps)(RoomListScreen)
