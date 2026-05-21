import z from "zod";

export const AirPollutionComponentsSchema = z.object({
    co:    z.number(),
    no:    z.number(),
    no2:   z.number(),
    o3:    z.number(),
    so2:   z.number(),
    pm2_5: z.number(),
    pm10:  z.number(),
    nh3:   z.number(),
});

export const AirPollutionItemSchema = z.object({
    dt:         z.number(),
    main:       z.object({ aqi: z.number() }),
    components: AirPollutionComponentsSchema,
});

export const AirPollutionResponseSchema = z.object({
    coord: z.object({
        lat: z.number(),
        lon: z.number(),
    }),
    list:  z.array(AirPollutionItemSchema),
});

export type AirPollutionComponents = z.infer<typeof AirPollutionComponentsSchema>;
export type AirPollutionItem      = z.infer<typeof AirPollutionItemSchema>;
export type AirPollutionResponse  = z.infer<typeof AirPollutionResponseSchema>;