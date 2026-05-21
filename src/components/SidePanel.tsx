import React, {Suspense} from 'react';
import { useSuspenseQuery } from "@tanstack/react-query";
import {getAirPollution} from "@/api.ts";
import type {Coords} from "@/types.ts";
import Card from "@/components/cards/Card.tsx";

type Props = {
    coords: Coords
}

function SidePanel(props: Props) {
  return (
    <div className="fixed top-0 right-0 h-screen w-90 shadow-md bg-sidebar z-10001 p-5">
        <Suspense>
            <AirPollution {...props} />
        </Suspense>
    </div>
  );
}

function AirPollution({coords}: Props) {
    const { data } = useSuspenseQuery(({
        queryKey: ['pollution', coords],
        queryFn: () => getAirPollution(coords)
    }));
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Air Pollution</h1>
            <h1 className="text-5xl font-semibold">{data.list[0].main.aqi}</h1>
            <h1 className="text-2xl font-semibold">AQI</h1>
            {Object.entries(data.list[0].components).map(([key, value]) => {
                return (
                    <Card
                        className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60"
                        key={key}>
                        <div className="flex justify-between">
                            <span className="text-lg font-bold capitalize">{key}</span>
                            <span className="text-lg font-bold">{value}</span></div>
                    </Card>
                )
            })}
        </div>
    )
}

export default SidePanel;