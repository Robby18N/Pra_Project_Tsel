export interface RegionDatum {
  region: string;
  count: number;
  /** Real-world coordinates (approximate regional hub city) for the Mapbox marker. */
  lng: number;
  lat: number;
}

/**
 * Offline-device count per region, ranked highest to lowest, plotted on an
 * actual Mapbox map (see OfflineRegionMap) using each region's approximate
 * hub-city coordinates.
 */
export const REGION_DATA: RegionDatum[] = [
  { region: "Jabotabek Inner", count: 62, lng: 106.8456, lat: -6.2088 }, // Jakarta
  { region: "Jawa Barat", count: 55, lng: 107.6191, lat: -6.9175 }, // Bandung
  { region: "Jawa Timur", count: 51, lng: 112.7521, lat: -7.2575 }, // Surabaya
  { region: "Jawa Tengah", count: 44, lng: 110.4203, lat: -6.9932 }, // Semarang
  { region: "Jabotabek Outer", count: 41, lng: 106.6319, lat: -6.1783 }, // Tangerang
  { region: "Sumbagsel", count: 36, lng: 104.7754, lat: -2.9761 }, // Palembang
  { region: "Sumbagut", count: 33, lng: 98.6722, lat: 3.5952 }, // Medan
  { region: "Sumbagteng", count: 28, lng: 101.4478, lat: 0.5071 }, // Pekanbaru
  { region: "Bali Nusra", count: 26, lng: 115.2126, lat: -8.6705 }, // Denpasar
  { region: "Kalimantan", count: 24, lng: 114.5908, lat: -3.3194 }, // Banjarmasin
  { region: "Sulawesi", count: 21, lng: 119.4327, lat: -5.1477 }, // Makassar
  { region: "Puma", count: 17, lng: 128.1814, lat: -3.6954 }, // Ambon
];

export const MAX_REGION_COUNT = Math.max(...REGION_DATA.map((r) => r.count));
export const MIN_REGION_COUNT = Math.min(...REGION_DATA.map((r) => r.count));

/** Light-to-strong red, interpolated by how high a region's offline count is relative to the others. */
export function regionColor(count: number): string {
  const t = (count - MIN_REGION_COUNT) / (MAX_REGION_COUNT - MIN_REGION_COUNT || 1);
  const from = [254, 202, 202];
  const to = [185, 28, 28];
  const rgb = from.map((c, i) => Math.round(c + (to[i] - c) * t));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}
