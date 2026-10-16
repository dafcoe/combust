export type FuelType = 'gasoline95' | 'gasoline98' | 'diesel' | 'lpg';

export type FuelPrices = Record<FuelType, number | null>;

export type FuelPriceBadgeProps = {
  fuelType: FuelType;
  price: number | null;
};

export type FuelPriceBadgeStyle = {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
};