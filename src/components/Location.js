import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBnPyST2ljhkClBtEvzMtZzL7ezpbSfRsw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));


export default function Location() {
  return (
    <div id="location">
        <h3>Location</h3>
        <p>7089 Boulevard Wilfrid-Hamel, Pincode- G2G 1B6, Quebec, Canada, Quebec City, Quebec, G2G 1B6, Canada</p>
        <div className="map">
            <MyMapComponent isMarkerShown />
        </div>
    </div>
  );
}
