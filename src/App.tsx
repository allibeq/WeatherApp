import './App.css'
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";
import CurrentForecast from "./components/cards/CurrentForecast.tsx";
import AdditionalInfo from "./components/cards/AdditionalInfo.tsx";
import Map from "./components/Map.tsx";
import {useState} from "react";
import type {Coords} from "./types.ts";
import LocationDropdown from "@/components/dropdowns/LocationDropdown.tsx";
import {useQuery} from "@tanstack/react-query";
import {getGeocode} from "@/api.ts";

function App() {
  const [coords, setCoords] = useState<Coords>({lat: 50, lon: 50});
  const [location, setLocation] = useState<string>('Tokyo');

  const {data} = useQuery({
      queryKey: ['geocode', location],
      queryFn: () => getGeocode(location)
  });

  const onMapClick = (lat: number, lon: number) => {
      setCoords({lat: lat, lon: lon});
  }

  return (
    <>
      <div className="flex flex-col gap-8">
          <LocationDropdown />
          <Map coords={coords} onMapClick={onMapClick}/>
        <CurrentForecast coords={coords}/>
        <HourlyForecast coords={coords}/>
        <DailyForecast coords={coords}/>
        <AdditionalInfo coords={coords}/>
      </div>
    </>
  )
}

export default App
