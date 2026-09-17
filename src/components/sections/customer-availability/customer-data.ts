export interface CustomerAvailabilityDatum {
  name: string;
  value: string;
  percent: number;
  background: string;
}

const GREEN = "linear-gradient(180deg, #22c55eff 0%, #188c43ff 100%)";
const BLUE = "linear-gradient(180deg, #3b82f6ff 0%, #2b61b8ff 100%)";

export const CUSTOMER_AVAILABILITY: CustomerAvailabilityDatum[] = [
  { name: "Mitratel", value: "99.95%", percent: 99.95, background: GREEN },
  { name: "Pegadaian", value: "99.9%", percent: 99.9, background: GREEN },
  { name: "BNI", value: "99.88%", percent: 99.88, background: BLUE },
  { name: "BSI", value: "99.84%", percent: 99.84, background: BLUE },
  { name: "Pelindo", value: "99.75%", percent: 99.75, background: BLUE },
];
