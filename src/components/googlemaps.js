import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat: -12.0647762,
            lng: -77.0165612,
        }
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        let markers = [
            {
                id: 1,
                latitude: -12.0640662,
                longitude: -77.0151812,
                shelter: 'Tienda 1'

            },
            {
                id: 2,
                latitude: -12.0650662,
                longitude: -77.0161812,
                shelter: 'Tienda 2'

            },
            {
                id: 3,
                latitude: -12.0647662,
                longitude: -77.0165612,
                shelter: 'Tienda 3'

            }
        ]
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng,
                }}
            >
                {markers.map(marker => {
                    //const onClick = props.onClick.bind(this, marker)
                    return (
                        <Marker
                            key={marker.id}

                            position={{ lat: marker.latitude, lng: marker.longitude }}
                        >
                            <InfoWindow>
                                <div>
                                    {marker.shelter}
                                </div>
                            </InfoWindow>
                        </Marker>
                    )
                })}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB-iJla49_0tWMKrAh0qztfIB9CXw5BmR8')
})(MapContainer)