export function formatStationDistance(
  distance: number | null | undefined,
  withUnit: boolean = true,
): string {
  if (distance === null || distance === undefined) return '—';

  const formattedDistance = distance.toFixed(1);
  const formattedUnit = withUnit ? ' km' : '';

  return `${formattedDistance}${formattedUnit}`;
}

export function formatStationClusterCount(clusterCount: number): string {
  if (clusterCount < 1000) return `${clusterCount}`;

  return `${(clusterCount / 1000).toFixed(1)}k`;
}