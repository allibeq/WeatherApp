import { WeatherApiResponseSchema } from './schemas/weatherSchema.ts'
import type { WeatherApiResponse } from './schemas/weatherSchema.ts'

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number, lon: number }): Promise<WeatherApiResponse> {
    const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`);
    const data = await res.json();
    return WeatherApiResponseSchema.parse(data);
}