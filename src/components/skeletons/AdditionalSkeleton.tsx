import React from 'react';
import Card from "@/components/cards/Card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

type Props = {}

// todo add skeleton only to FormatComponent

function AdditionalSkeleton({}: Props) {
  return (
      <Card title="Additional Weather Info" childrenClassName="flex flex-col items-center gap-8">
        {Array.from({length: 6}).map((_, index) => (
            <div className="flex justify-between w-full px-5 items-center" key={index}>
              <div className="flex gap-4">
                <Skeleton className="w-27 h-7"/>
                <Skeleton className="size-7"/>
              </div>
              <Skeleton className="w-14 h-8"/>
            </div>
        ))}
      </Card>
  );
}

export default AdditionalSkeleton;