import React from 'react';
import Card from "@/components/cards/Card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

type Props = {}

function CurrentSkeleton({}: Props) {
  return (
      <Card title='Current Weather' childrenClassName="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 items-center">
              <Skeleton className="w-50 h-24"/>
              <Skeleton className="size-30 rounded-full"/>
              <Skeleton className="w-30 h-7"/>
          </div>
          <div className="flex flex-col gap-2 items-center">
              <p className="text-xl">Local Time:</p>
              <Skeleton className="w-40 h-10"/>
          </div>
          <div className="flex justify-between w-full ">
              <div className="flex flex-col gap-2">
                  <p className="text-gray-500">Feels Like</p>
                  <Skeleton className="w-30 h-6"/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-gray-500">Humidity</p>
                  <Skeleton className="w-30 h-6"/>
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-gray-500">Wind</p>
                  <Skeleton className="w-30 h-6"/>
              </div>
          </div>
      </Card>
  );
}

export default CurrentSkeleton;