import './App.css';
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";
import CurrentForecast from "./components/cards/CurrentForecast.tsx";
import AdditionalInfo from "./components/cards/AdditionalInfo.tsx";
import Map from "./components/Map.tsx";
import {Suspense, useState} from "react";
import type {Coords} from "./types.ts";
import LocationDropdown from "@/components/dropdowns/LocationDropdown.tsx";
import {useQuery} from "@tanstack/react-query";
import {getGeocode} from "@/api.ts";
import MapTypeDropdown from "@/components/dropdowns/MapTypeDropdown.tsx";
import MapLegend from "@/components/MapLegend.tsx";
import CurrentSkeleton from "@/components/skeletons/CurrentSkeleton.tsx";
import HourlySkeleton from "@/components/skeletons/HourlySkeleton.tsx";
import DailySkeleton from "@/components/skeletons/DailySkeleton.tsx";
import AdditionalSkeleton from "@/components/skeletons/AdditionalSkeleton.tsx";
import SidePanel from "@/components/SidePanel.tsx";

function App() {
  const [coordinates, setCoords] = useState<Coords>({lat: 50, lon: 50});
  const [location, setLocation] = useState<string>('Tokyo');
  const [mapType, setMapType] = useState<string>('clouds_new');

  const { data: geocodeData } = useQuery({
      queryKey: ['geocode', location],
      queryFn: () => getGeocode(location)
  });

  const onMapClick = (lat: number, lon: number) => {
      setCoords({lat: lat, lon: lon});
      setLocation('custom');
  }

  const coords = location === 'custom' ? coordinates : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 }

  return (
    <>
      <div className="flex flex-col gap-8">
          <div className="flex gap-5">
              <div className="flex gap-4">
                  <h2 className="text-xl font-semibold">Location:</h2>
                  <LocationDropdown location={location} setLocation={setLocation}/>
              </div>
              <div className="flex gap-4">
                  <h2 className="text-xl font-semibold">Map type:</h2>
                  <MapTypeDropdown mapType={mapType} setMapType={setMapType}/>
              </div>
          </div>
          <div className="relative">
              <Map coords={coords} onMapClick={onMapClick} mapType={mapType}/>
              <MapLegend mapType={mapType}/>
          </div>
          <Suspense fallback={ <CurrentSkeleton/>}>
              <CurrentForecast coords={coords}/>
          </Suspense>
          <Suspense fallback={ <HourlySkeleton/>}>
              <HourlyForecast coords={coords}/>
          </Suspense>
          <Suspense fallback={ <DailySkeleton/>}>
              <DailyForecast coords={coords}/>
          </Suspense>
          <Suspense fallback={ <AdditionalSkeleton/>}>
              <AdditionalInfo coords={coords}/>
          </Suspense>
      </div>
      <SidePanel coords={coords}/>
    </>
  )
}

export default App
