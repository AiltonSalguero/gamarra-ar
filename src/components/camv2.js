import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class ArLocation2 extends Component {
    render() {
        return (
            <div>

                <a-scene vr-mode-ui="enabled: false"
                    embedded
                    arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;">
                    
                    <a-box color="yellow" gps-projected-entity-place="latitude: -11.9658694; longitude: -76.9947005;" position="0 15 0" scale="0.3 0.3 0.3" />
                    <a-box color="blue" gps-entity-place="latitude: -11.9659694; longitude: -76.9947005;" position="0 15 0" scale="0.3 0.3 0.3" />
                    <a-camera id='camera1' look-controls-enabled='false' arjs-look-controls='smoothingFactor: 0.1' gps-camera='gpsMinDistance: 5' rotation-reader> </a-camera>
                </a-scene>

            </div>
        )
    }
}

export default ArLocation2;