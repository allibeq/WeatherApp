import React, {useEffect} from 'react';
import {MapContainer, Marker, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type {Coords} from "../types.ts";
import {MaptilerLayer} from "@maptiler/leaflet-maptilersdk";

const API_KEY = import.meta.env.VITE_API_KEY;
const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

type Props = {
  coords: Coords,
  onMapClick: (lat: number, lon: number) => void,
    mapType: string,
}

function Map({coords, onMapClick, mapType}: Props) {
  const {lat, lon} = coords;
  return (
      <MapContainer
          center={[lat, lon]}
          zoom={5}
          style={{width: 'full', height: '500px'}}>
        <MapClick onMapClick={onMapClick} coords={coords} />
        <MapTileLayer/>
          <TileLayer
              opacity={0.5}
              url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}/>
        <Marker position={[lat, lon]}/>
      </MapContainer>
  );
}

function MapClick({onMapClick, coords}: {
    onMapClick: (lat: number, lon: number) => void
    coords: Coords
}) {
    const map = useMap();
    map.panTo([coords.lat, coords.lon]);
  map.on('click', (e) => {
    const {lat, lng} = e.latlng;
    onMapClick(lat, lng);
  });

  return null;
}

function MapTileLayer() {
    const map = useMap();

    useEffect(() => {
        const tileLayer = new MaptilerLayer({
            style: 'basic-dark',
            apiKey: MAPTILER_API_KEY
        });
        tileLayer.addTo(map);

        return () => {map.removeLayer(tileLayer)}
    }, [map]);

    return null;
}

export default Map;