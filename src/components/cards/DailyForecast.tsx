import React from 'react';
import Card from "./Card.tsx";
import {mockData as data} from "../../mock.ts";
import WeatherIcon from "../WeatherIcon.tsx";
// import {useQuery, useSuspenseQuery} from "@tanstack/react-query";

type Props = {
}

function DailyForecast({}: Props) {
    // const { data } = useSuspenseQuery({
    //   queryKey: ['weather'],
    //   // queryFn: () => getWeather({lat: 50, lon: 50}),
    //   queryFn: () => getWeather({lat: 50, lon: 50}),
    // })

    return (
        <Card title='Daily' childrenClassName="flex flex-col gap-4">
                {data?.daily.map(day => (
                    <div key={day.dt} className="flex justify-between">
                        <p className="w-9">{new Date(day.dt * 1000).toLocaleDateString(undefined, {
                            weekday: "short",
                        })}</p>
                        <WeatherIcon src={day.weather[0].icon}/>
                        <p>{Math.round(day.temp.day)}°C</p>
                        <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
                        <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
                    </div>
                ))}
        </Card>
    );
}

export default DailyForecast;