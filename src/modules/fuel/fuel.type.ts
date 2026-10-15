export type FuelType = 'gasoline95' | 'gasoline98' | 'diesel' | 'lpg';

export type FuelPrices = Record<FuelType, number | null>;
