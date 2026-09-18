/** Icons for the NOC Operations device-status row. Same 20x20-grid stroke convention as kpi-icons.tsx. */

const STROKE = {
  fill: "none",
  strokeWidth: 1.458,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export function MaintenanceIcon({ color = "#eab308ff" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="box-border w-[16.667px] h-[16.667px] absolute left-[1.667px] top-[1.667px] overflow-visible"
    >
      <path
        d="M15.4 6.6C14.6 7.4 13.4 7.6 12.4 7.2L7.6 12C8 13 7.8 14.2 7 15C6 16 4.4 16 3.4 15C2.4 14 2.4 12.4 3.4 11.4C4.2 10.6 5.4 10.4 6.4 10.8L11.2 6C10.8 5 11 3.8 11.8 3C12.8 2 14.4 2 15.4 3C16.4 4 16.4 5.6 15.4 6.6Z"
        stroke={color}
        {...STROKE}
      />
    </svg>
  );
}

export function UnknownStatusIcon({ color = "#64748bff" }: { color?: string }) {
  return (
    <>
      <svg
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[16.667px] h-[16.667px] absolute left-[1.667px] top-[1.667px] overflow-visible z-0"
      >
        <path
          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
          stroke={color}
          {...STROKE}
        />
      </svg>
      <svg
        viewBox="0 0 6.06 8.4"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[5.05px] h-[7px] absolute left-[7.5px] top-[5px] overflow-visible z-10"
      >
        <path
          d="M0 2.1C0 0.94 1.09 0 2.43 0C3.77 0 4.86 0.94 4.86 2.1C4.86 3.26 3.77 3.85 3.06 4.41C2.55 4.81 2.43 5.2 2.43 5.6"
          stroke={color}
          {...STROKE}
        />
      </svg>
      <svg
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[1.458px] h-[1.458px] absolute left-[9.583px] top-[14.167px] overflow-visible z-20"
      >
        <path d="M0 0L0.010000229 0" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}
