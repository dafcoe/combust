export function formatFuelPrice(
  price: number | null | undefined,
  withCurrency: boolean = true,
): string {
  if (price === null || price === undefined) return '—';

  const formattedPrice = price.toFixed(3);
  const formattedCurrency = withCurrency ? ' €' : '';

  return `${formattedPrice}${formattedCurrency}`;
}