export function formatStationDistance(
  distance: number | null | undefined,
  withUnit: boolean = true,
): string {
  if (distance === null || distance === undefined) return '—';

  const formattedDistance = distance.toFixed(1);
  const formattedUnit = withUnit ? ' km' : '';

  return `${formattedDistance}${formattedUnit}`;
}