import { z } from "zod";

const LocalNamesSchema = z.record(z.string(), z.string());

const CitySchema = z.object({
    name: z.string(),
    local_names: LocalNamesSchema.optional(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string().optional(),
});

export const CitiesResponseSchema = z.array(CitySchema);

export type City = z.infer<typeof CitySchema>;
export type CitiesResponse = z.infer<typeof CitiesResponseSchema>;