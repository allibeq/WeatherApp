import React, {type Dispatch, type SetStateAction} from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

type Props = {
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}

function LocationDropdown({location, setLocation}: Props) {
  return (
      <Select value={location} onValueChange={(value: string) => setLocation(value)}>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent className="z-10001">
              <SelectGroup>
                  {location === 'custom' && <SelectItem value="custom">Custom</SelectItem>}
                  {locations.map((location) => (
                      <SelectItem value={location} key={location}>{location}</SelectItem>
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






