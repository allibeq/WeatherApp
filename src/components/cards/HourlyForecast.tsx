import React from 'react';
import Card from "./Card.tsx";
import {mockData as data} from "../../mock.ts";
import WeatherIcon from "../WeatherIcon.tsx";
// import {useQuery, useSuspenseQuery} from "@tanstack/react-query";

type Props = {}

function HourlyForecast({}: Props)  {
    // const { data } = useSuspenseQuery({
    //   queryKey: ['weather'],
    //   // queryFn: () => getWeather({lat: 50, lon: 50}),
    //   queryFn: () => getWeather({lat: 50, lon: 50}),
    // })
    // [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
    return (
        <Card title="Hourly Forecast" childrenClassName="flex gap-6 overflow-x-auto ">
            {data.hourly.map(hour => (
                <div className="flex flex-col gap-2 items-center p-2">
                    <p>
                        {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                            timeStyle: "short",
                        })}
                    </p>
                    <WeatherIcon src={hour.weather[0].icon}/>
                    <p>
                        {Math.round(hour.temp)}°C
                    </p>
                </div>
            ))}
        </Card>
    );
}

export default HourlyForecast;