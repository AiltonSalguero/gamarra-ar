import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
//require('aframe');
require('./peakfinder');



class ArLocation4 extends Component {
    render() {
        return (
            <div>
  
                <a-scene
                    vr-mode-ui="enabled: false"
                    embedded
                    arjs="sourceType: webcam; debugUIEnabled: false;">
                    
                    <a-box gps-projected-entity-place='latitude: -11.9659694; longitude: -76.9947005;' material='color: red' scale='10 10 10'></a-box>
                    <a-entity peakfinder></a-entity>
                    <a-text gps-projected-entity-place='latitude: -11.9659694; longitude: -76.9947005;'></a-text>
                    <a-image src="map_marker_icon.png" gps-projected-entity-place='latitude: -11.9654429; longitude: -76.9942375;' look-at="[gps-projected-camera]"></a-image>
                    <a-text
        value="Tienda test."
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: -11.9654429; longitude: -76.9942375;"
      ></a-text>
                    <a-camera gps-camera rotation-reader> </a-camera>
                </a-scene>
            </div>
        )
    }
}
export default ArLocation4;