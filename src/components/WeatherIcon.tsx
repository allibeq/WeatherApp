import React from 'react';

type Props = {
    src: string
}

function WeatherIcon({src}: Props) {
    return (
        <img className="size-10"
             src={`https://openweathermap.org/payload/api/media/file/${src}.png`}
             alt="Weather Icon"/>
    );
}

export default WeatherIcon;