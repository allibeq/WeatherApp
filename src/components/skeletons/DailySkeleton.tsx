import React from 'react';
import Card from "@/components/cards/Card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

type Props = {}

function DailySkeleton({}: Props) {
  return (
      <Card title='Daily Forecast' childrenClassName="flex flex-col gap-4">
        {Array.from({length: 8}).map((_, index) => (
            <div key={index} className="flex justify-between">
              <Skeleton className="w-9 h-10"/>
              <Skeleton className="size-10 rounded-full"/>
              <Skeleton className="w-8 h-10"/>
              <Skeleton className="w-8 h-10"/>
              <Skeleton className="w-8 h-10"/>
            </div>
        ))}
      </Card>
  );
}

export default DailySkeleton;