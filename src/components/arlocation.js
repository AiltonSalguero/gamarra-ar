import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class ArLocation extends Component {
  render() {
    return (
      <div>

        <a-scene vr-mode-ui="enabled: false" embedded
          arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'
        >
          <a-box color="yellow" gps-projected-entity-place="latitude: -11.9652278; longitude: -76.994232;" position="0 15 0" scale="0.3 0.3 0.3" />
          <a-box color="blue" gps-projected-entity-place="latitude: -11.9652478; longitude: -76.994432;" position="0 15 0" scale="0.3 0.3 0.3" />
          <a-camera gps-camera rotation-reader></a-camera>
        </a-scene>

      </div>
    )
  }
}

export default ArLocation;