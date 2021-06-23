import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class ArLocation3 extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    render() {
        return (<a-scene
            vr-mode-ui="enabled: false"
            arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false;'
            renderer='antialias: true; alpha: true'>
            <a-text
                value="Tienda"
                look-at="[gps-projected-camera]"
                scale="120 120 120"
                gps-projected-entity-place="latitude: -11.9659694; longitude: -76.9947005;"
            ></a-text>
            <a-box gps-projected-entity-place='latitude: -11.9659694; longitude: -76.9947005;' material='color: red' scale='10 10 10'></a-box>
            <a-camera gps-projected-camera rotation-reader></a-camera>

        </a-scene>

        )
    }
}

export default ArLocation3;