import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

type Props = {}

function LocationDropdown({}: Props) {
  return (
      <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent className="z-10001">
              <SelectGroup>
                  {locations.map((location) => (
                      <SelectItem value={location.name} key={location.name}>{location.name}</SelectItem>
                  ))}
              </SelectGroup>
          </SelectContent>
      </Select>
  );
}

const locations = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Dubai",
    "Sydney",
    "Los Angeles",
    "Singapore",
    "Mumbai",
    "São Paulo",
    "Cairo",
    "Toronto",
    "Berlin",
    "Mexico City",
    "Bangkok",
    "Istanbul",
    "Amsterdam",
    "Seoul",
    "Cape Town",
    "Buenos Aires"
]

export default LocationDropdown;






