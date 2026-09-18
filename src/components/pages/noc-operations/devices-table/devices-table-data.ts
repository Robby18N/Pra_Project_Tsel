export interface CustomerDeviceRow {
  customer: string;
  region: string;
  devices: number;
  online: number;
  offline: number;
  maintenance: number;
  availability: number;
}

const RAW: Array<Omit<CustomerDeviceRow, "devices" | "availability"> & { online: number }> = [
  { customer: "BNI", region: "Jabotabek Inner", online: 1846, offline: 3, maintenance: 1 },
  { customer: "Pegadaian", region: "Jawa Barat", online: 1417, offline: 2, maintenance: 1 },
  { customer: "Mitratel", region: "Sumbagut", online: 973, offline: 5, maintenance: 2 },
  { customer: "Pelindo", region: "Sumbagsel", online: 759, offline: 1, maintenance: 0 },
  { customer: "BSI", region: "Jabotabek Outer", online: 1116, offline: 3, maintenance: 1 },
  { customer: "Pertamina Retail", region: "Kalimantan", online: 882, offline: 6, maintenance: 2 },
  { customer: "Jasa Marga", region: "Jawa Tengah", online: 639, offline: 1, maintenance: 0 },
  { customer: "Bulog", region: "Sulawesi", online: 537, offline: 2, maintenance: 1 },
  { customer: "Kimia Farma", region: "Jawa Timur", online: 709, offline: 1, maintenance: 0 },
  { customer: "Angkasa Pura", region: "Bali Nusra", online: 479, offline: 1, maintenance: 0 },
  { customer: "PLN Icon Plus", region: "Jabotabek Inner", online: 1254, offline: 4, maintenance: 2 },
  { customer: "BRI Insurance", region: "Jawa Barat", online: 389, offline: 1, maintenance: 0 },
  { customer: "Perumnas", region: "Sumbagteng", online: 306, offline: 3, maintenance: 1 },
  { customer: "Inalum", region: "Sumbagut", online: 260, offline: 0, maintenance: 0 },
  { customer: "Sucofindo", region: "Puma", online: 177, offline: 2, maintenance: 1 },
];

/** "Devices by customer" table rows — devices/availability are derived so the numbers always stay internally consistent. */
export const DEVICES_TABLE_DATA: CustomerDeviceRow[] = RAW.map((r) => {
  const devices = r.online + r.offline + r.maintenance;
  return { ...r, devices, availability: (r.online / devices) * 100 };
});

export function availabilityTier(availability: number): "green" | "blue" | "yellow" {
  if (availability >= 99.8) return "green";
  if (availability >= 99.4) return "blue";
  return "yellow";
}
