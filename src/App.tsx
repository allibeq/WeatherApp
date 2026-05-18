import './App.css'
// import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
// import {getWeather} from "./api.ts";
import Card from "./components/cards/Card.tsx";
import {mockData as data} from "./mock.ts";
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";

function App() {
  // const { data } = useSuspenseQuery({
  //   queryKey: ['weather'],
  //   // queryFn: () => getWeather({lat: 50, lon: 50}),
  //   queryFn: () => getWeather({lat: 50, lon: 50}),
  // })


  return (
    <>
      <div className="flex flex-col gap-8">
        <Card title='Current'>{JSON.stringify(data?.current).slice(0, 100)}</Card>
            <HourlyForecast/>
          <DailyForecast/>
      </div>
    </>
  )
}

export default App
