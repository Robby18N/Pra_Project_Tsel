export interface RegionDatum {
  region: string;
  count: number;
  /** Approximate position (% of container) used by the simplified archipelago map — west to east, matching Indonesia's real geography. */
  x: number;
  y: number;
}

/**
 * Offline-device count per region, ranked highest to lowest. The source
 * design draws this over hundreds of hand-placed SVG paths forming a literal
 * Indonesia heatmap; that's reproduced here as a simplified dot-map (see
 * OfflineRegionMap) plus this same ranked list, rather than traced path-for-path.
 */
export const REGION_DATA: RegionDatum[] = [
  { region: "Jabotabek Inner", count: 62, x: 34, y: 68 },
  { region: "Jawa Barat", count: 55, x: 40, y: 74 },
  { region: "Jawa Timur", count: 51, x: 62, y: 76 },
  { region: "Jawa Tengah", count: 44, x: 51, y: 76 },
  { region: "Jabotabek Outer", count: 41, x: 38, y: 78 },
  { region: "Sumbagsel", count: 36, x: 22, y: 58 },
  { region: "Sumbagut", count: 33, x: 8, y: 20 },
  { region: "Sumbagteng", count: 28, x: 15, y: 40 },
  { region: "Bali Nusra", count: 26, x: 71, y: 83 },
  { region: "Kalimantan", count: 24, x: 46, y: 30 },
  { region: "Sulawesi", count: 21, x: 66, y: 34 },
  { region: "Puma", count: 17, x: 88, y: 46 },
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
