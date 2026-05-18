import './App.css'
// import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
// import {getWeather} from "./api.ts";
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";
import CurrentForecast from "./components/cards/CurrentForecast.tsx";
import AdditionalInfo from "./components/cards/AdditionalInfo.tsx";

function App() {
  // const { data } = useSuspenseQuery({
  //   queryKey: ['weather'],
  //   // queryFn: () => getWeather({lat: 50, lon: 50}),
  //   queryFn: () => getWeather({lat: 50, lon: 50}),
  // })


  return (
    <>
      <div className="flex flex-col gap-8">
        <CurrentForecast />
        <HourlyForecast/>
        <DailyForecast/>
        <AdditionalInfo/>
      </div>
    </>
  )
}

export default App
