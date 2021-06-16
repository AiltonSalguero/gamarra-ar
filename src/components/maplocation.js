import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleMaps from './googlemaps';

class MapLocation extends Component {
  render() {
    return(
      <div>
        <p>Map</p>
        <GoogleMaps></GoogleMaps>
      </div>
    )
  }
}

export default MapLocation;