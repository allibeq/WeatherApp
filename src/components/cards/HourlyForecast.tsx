import React from 'react';
import Card from "./Card.tsx";
import {mockData as data} from "../../mock.ts";
import WeatherIcon from "../WeatherIcon.tsx";
import type {Coords} from "../../types.ts";
// import {useSuspenseQuery} from "@tanstack/react-query";
// import {getWeather} from "../../api.ts";

type Props = {
    coords: Coords
}

function HourlyForecast({coords}: Props)  {
    // const { data } = useSuspenseQuery({
    //   queryKey: ['weather', coords],
    //   queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
    // })
    return (
        <Card title="Hourly Forecast" childrenClassName="flex gap-6 overflow-x-auto ">
            {data.hourly.map(hour => (
                <div key={`${hour.dt}-${hour.temp}`} className="flex flex-col gap-2 items-center p-2">
                    <p className="whitespace-nowrap">
                        {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
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