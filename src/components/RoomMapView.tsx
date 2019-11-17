
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleProp, View, ViewStyle } from 'react-native';

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

const initialRegion =  {
    latitude: 22.3193,
    longitude: 114.1694,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
}

interface MapViewProps {
    style: StyleProp<ViewStyle>;
}

export default (props: MapViewProps) => 
    (<MapView
        provider={PROVIDER_GOOGLE} 
        style={props.style}
        initialRegion={initialRegion}
        customMapStyle={customMapStyle}
    />)