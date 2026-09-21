/** Icons for the Helpdesk "Escalation path" flow (customer → helpdesk → partner) and its timing callouts. */

const STROKE = {
  fill: "none",
  strokeWidth: 1.167,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export function PhoneRingingIcon({ color = "#334155ff" }: { color?: string }) {
  const s = { ...STROKE, stroke: color };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 12 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[8px] h-[13.333px] absolute left-[4px] top-[1.333px] overflow-visible z-0">
        <path d="M0 20L0 2C0 1.4695671 0.2107136 0.96085906 0.58578634 0.58578634C0.96085906 0.2107136 1.4695671 4.4408921e-16 2 0L10 0C10.530433 4.4408921e-16 11.039141 0.2107136 11.414213 0.58578634C11.789286 0.96085906 12 1.4695671 12 2L12 20L0 20Z" {...s} />
      </svg>
      <svg viewBox="0 0 4 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[6.667px] absolute left-[1.333px] top-[8px] overflow-visible z-10">
        <path d="M4 0L2 0C1.4695671 0 0.96085906 0.21071407 0.58578634 0.58578682C0.2107136 0.96085954 4.4408921e-16 1.4695671 0 2L0 8C4.4408921e-16 8.5304327 0.2107136 9.0391407 0.58578634 9.4142132C0.96085906 9.7892857 1.4695671 10 2 10L4 10" {...s} />
      </svg>
      <svg viewBox="0 0 4 13" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[8.667px] absolute left-[12px] top-[6px] overflow-visible z-20">
        <path d="M0 0L2 0C2.5304329 0 3.0391405 0.21071407 3.4142132 0.58578682C3.7892859 0.96085954 4 1.4695671 4 2L4 11C4 11.530433 3.7892859 12.039141 3.4142132 12.414213C3.0391405 12.789286 2.5304329 13 2 13L0 13" {...s} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[1.167px] absolute left-[6.667px] top-[4px] overflow-visible z-30">
        <path d="M0 0L4 0" {...s} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[1.167px] absolute left-[6.667px] top-[6.667px] overflow-visible z-40">
        <path d="M0 0L4 0" {...s} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[1.167px] absolute left-[6.667px] top-[9.333px] overflow-visible z-50">
        <path d="M0 0L4 0" {...s} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.667px] h-[1.167px] absolute left-[6.667px] top-[12px] overflow-visible z-[60]">
        <path d="M0 0L4 0" {...s} />
      </svg>
    </div>
  );
}

export function HeadsetIcon({ color = "#3b82f6ff" }: { color?: string }) {
  const s = { ...STROKE, stroke: color };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 18 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[12px] h-[10.667px] absolute left-[2px] top-[1.333px] overflow-visible z-0">
        <path d="M1.3322676e-15 9L3 9C3.5304329 9 4.0391407 9.2107143 4.4142137 9.5857868C4.7892866 9.9608593 5 10.469567 5 11L5 14C5 14.530433 4.7892866 15.039141 4.4142137 15.414213C4.0391407 15.789286 3.5304329 16 3 16L2 16C1.4695671 16 0.96085906 15.789286 0.58578634 15.414213C0.2107136 15.039141 1.7763568e-15 14.530433 1.3322676e-15 14L1.3322676e-15 9ZM1.3322676e-15 9C-1.7611633e-08 7.8181033 0.23279178 6.6477795 0.6850841 5.5558491C1.1373764 4.4639187 1.8003116 3.471766 2.6360388 2.6360388C3.471766 1.8003116 4.4639187 1.1373765 5.5558491 0.68508422C6.6477795 0.23279187 7.8181033 1.110223e-15 9 0C10.181897 -4.4408921e-16 11.352221 0.23279187 12.444151 0.68508422C13.536081 1.1373765 14.528233 1.8003116 15.36396 2.6360388C16.199688 3.471766 16.862625 4.4639187 17.314917 5.5558491C17.767208 6.6477795 18 7.8181033 18 9L18 14C18 14.530433 17.789286 15.039141 17.414213 15.414213C17.039141 15.789286 16.530434 16 16 16L15 16C14.469567 16 13.960859 15.789286 13.585787 15.414213C13.210714 15.039141 13 14.530433 13 14L13 11C13 10.469567 13.210714 9.9608593 13.585787 9.5857868C13.960859 9.2107143 14.469567 9 15 9L18 9" {...s} />
      </svg>
      <svg viewBox="0 0 9 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6px] h-[4px] absolute left-[8px] top-[10.667px] overflow-visible z-10">
        <path d="M9 0L9 2C9 3.0608659 8.5785723 4.0782809 7.8284264 4.8284264C7.0782809 5.5785718 6.0608659 6 5 6L0 6" {...s} />
      </svg>
    </div>
  );
}

export function WrenchIcon({ color = "#334155ff" }: { color?: string }) {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 19.004961013793945 19.004961028695107" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[12.67px] h-[12.67px] absolute left-[1.999px] top-[1.331px] overflow-visible z-0">
        <path
          d="M11.701321 4.3036423C11.518094 4.490571 11.415462 4.7418895 11.415462 5.0036421C11.415462 5.2653947 11.518094 5.5167131 11.701321 5.7036419L13.301319 7.3036423C13.488248 7.4868693 13.739567 7.5894995 14.00132 7.5894995C14.263073 7.5894995 14.514392 7.4868693 14.701321 7.3036423L18.471319 3.5336421C18.974154 4.6448312 19.126404 5.8828764 18.907778 7.0827875C18.689152 8.2826986 18.110033 9.3874865 17.247599 10.249921C16.385164 11.112355 15.280376 11.691473 14.080465 11.9101C12.880554 12.128727 11.642509 11.976478 10.531321 11.473642L3.6213202 18.38364C3.2234955 18.781466 2.6839294 19.004961 2.1213202 19.004961C1.5587111 19.004961 1.019145 18.781466 0.62132025 18.38364C0.22349551 17.985815 4.4408921e-16 17.446249 0 16.88364C0 16.321032 0.22349551 15.781466 0.62132025 15.383641L7.5313201 8.4736423C7.0284848 7.3624535 6.876236 6.1244078 7.0948625 4.9244967C7.313489 3.7245855 7.8926072 2.6197972 8.7550411 1.7573633C9.6174755 0.89492935 10.722263 0.3158108 11.922174 0.097184181C13.122086 -0.12144245 14.36013 0.030806601 15.471319 0.53364182L11.711321 4.293642L11.701321 4.3036423Z"
          fill="none"
          stroke={color}
          strokeWidth={1.167}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function ClockIcon({ color = "#64748bff" }: { color?: string }) {
  const s = { ...STROKE, strokeWidth: 1.021, stroke: color };
  return (
    <div className="box-border w-[14px] shrink-0 h-[14px] overflow-hidden relative">
      <svg viewBox="0 0 20 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[11.667px] h-[11.667px] absolute left-[1.167px] top-[1.167px] overflow-visible z-0">
        <path d="M20 10C20 15.522848 15.522848 20 10 20C4.4771523 20 0 15.522848 0 10C0 4.4771523 4.4771523 0 10 0C15.522848 0 20 4.4771523 20 10Z" {...s} />
      </svg>
      <svg viewBox="0 0 4 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.333px] h-[4.667px] absolute left-[7px] top-[3.5px] overflow-visible z-10">
        <path d="M0 0L0 6L4 8" {...s} />
      </svg>
    </div>
  );
}
