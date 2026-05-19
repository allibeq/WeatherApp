import React from 'react';
import Card from "./Card.tsx";
// import {useSuspenseQuery} from "@tanstack/react-query";
// import {getWeather} from "../../api.ts";
import {mockData as data} from "../../mock.ts";
import type {Coords} from "../../types.ts";
import Cloud from '../../assets/cloud.svg?react'
import Pressure from '../../assets/pressure.svg?react'
import Sunrise from '../../assets/sunrise.svg?react'
import Sunset from '../../assets/sunset.svg?react'
import Uv from '../../assets/uv.svg?react'
import Wind from '../../assets/wind.svg?react'
import Arrow from '../../assets/up-arrow.svg?react'

type Props = {
    coords: Coords
}

function AdditionalInfo({coords}: Props){
    // const { data } = useSuspenseQuery({
    //   queryKey: ['weather', coords],
    //   queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
    // })

    return (
        <Card title="Additional Weather Info" childrenClassName="flex flex-col items-center gap-8">
            {rows.map(({label, value, Icon}) => (
                <div className="flex justify-between w-full px-5 items-center" key={value}>
                    <div className="flex gap-4">
                        <span className="text-gray-500">{label}</span>
                        <Icon className="size-7 invert"/>
                    </div>
                    <span>
                        <FormatComponent value={value} number={data.current[value]}/>
                    </span>

                </div>
            ))}
        </Card>
    );
}

function FormatComponent({value, number}: {value: string; number: number}) {
    if (value === "sunrise" || value === "sunset") {
        return new Date(number * 1000).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    }

    if (value === "wind_deg") return <Arrow className="size-8 invert" style={{transform: `rotate(${number}deg)`}}/>

    return number;
}

const rows = [
    { label: "Sunrise", value: "sunrise", Icon: Sunrise },
    { label: "Sunset", value: "sunset", Icon: Sunset },
    { label: "Pressure (hPa)", value: "pressure", Icon: Pressure },
    { label: "UV Index", value: "uvi", Icon: Uv },
    { label: "Cloudiness (%)", value: "clouds", Icon: Cloud },
    { label: "Wind Direction", value: "wind_deg", Icon: Wind },
] as const;

export default AdditionalInfo;