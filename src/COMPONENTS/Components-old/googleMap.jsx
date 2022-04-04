import React, { Component } from 'react';
import Map from '../../API/GoogleMaps.API.jsx'

/*
Google Map ;
opens a google map 
open location can be change from options --> center
red dot can be change from marker--> position

*/


class GoogleMap extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        }}
        onMapLoad={map => {
          const marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
      />
    );
  }
}

export default GoogleMap;