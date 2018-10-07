/* global google */
import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

export default class MapWithADirectionsRenderer extends React.Component {
  render() {
    return (
      <div>
        <MyMapComponent
          key={this.props.key}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIRBUwBkojgShl_I4uFR2VWm1Ir9FVYig&libraries=places,drawing,geometry"
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `400px`}}/>}
          mapElement={<div style={{height: `50%`}}/>}
          direction={this.props.direction}
        />
      </div>
    )
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: props.direction.lat, lng: props.direction.lng}}
  >
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
  </GoogleMap>
));