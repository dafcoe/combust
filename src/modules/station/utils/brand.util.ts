import { DEFAULT_BRAND_LOGO_URL } from '../station.constant.ts';

const brandLogos = import.meta.glob('@/assets/brands/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function getBrandLogoUrl(brand: string): string {
  const key = `/src/assets/brands/${brand.toLowerCase()}.svg`;

  return brandLogos[key] ?? brandLogos[DEFAULT_BRAND_LOGO_URL];
}