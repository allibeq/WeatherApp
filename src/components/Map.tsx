import React from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Props = {}

function Map({}: Props) {
  return (
      <MapContainer center={[50, 50]} zoom={5} style={{width: 'full', height: '500px'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50, 50]}/>
      </MapContainer>
  );
}

export default Map;