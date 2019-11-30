import React from 'react';
import MapView, { PROVIDER_GOOGLE, MapStyleElement } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';

const customMapStyle: MapStyleElement[] = [
    {
        featureType: 'all',
        elementType: 'all',
        stylers: [
            {
                invert_lightness: true
            },
            {
                saturation: 10
            },
            {
                lightness: 30
            },
            {
                gamma: 0.5
            },
            {
                hue: '#435158'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
            {
                color: '#89c0eb'
            },
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
            {
                color: '#405769'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#232f3a'
            }
        ]
    }
];

const initialRegion = {
    latitude: 22.3193,
    longitude: 114.1694,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4
};

interface MapViewProps {
    style: StyleProp<ViewStyle>;
}

export default (props: MapViewProps) => (
    <MapView
        provider={PROVIDER_GOOGLE}
        style={props.style}
        initialRegion={initialRegion}
        customMapStyle={customMapStyle}
    />
);
