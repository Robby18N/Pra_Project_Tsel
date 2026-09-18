export const AVAILABILITY_LABELS = [
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
];

/** Last-24h availability %, with a dip at 08:00 lining up with the BTS-JKT-0042 power incident. */
export const AVAILABILITY_DATA = [
  99.82, 99.85, 99.79, 99.88, 99.9, 99.86, 99.7, 99.2, 98.65, 99.15, 99.6, 99.78, 99.83,
];

export const AVAILABILITY_INSIGHT =
  "The dip at 08:00 lines up with the power incident at BTS-JKT-0042.";
