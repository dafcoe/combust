export type FuelType = 'gasoline95' | 'gasoline98' | 'diesel' | 'lgp';

export type FuelPrices = Record<FuelType, number | null>;
