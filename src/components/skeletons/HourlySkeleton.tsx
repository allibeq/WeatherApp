import React from 'react';
import Card from "@/components/cards/Card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

type Props = {}

function HourlySkeleton({}: Props) {
  return (
      <Card title="Hourly Forecast" childrenClassName="flex gap-6 overflow-x-auto ">
        {Array.from({length:24}).map((_, index) => (
            <div key={index} className="flex flex-col gap-2 items-center p-2">
              <Skeleton className="w-9 h-6"/>
              <Skeleton className="size-10"/>
              <Skeleton className="w-9 h-6"/>
            </div>
        ))}
      </Card>
  );
}

export default HourlySkeleton;