/** Icons for the sidebar's main navigation list. Each accepts a `color` so the active/inactive tint (#3b82f6 / #334155) is driven by the sidebar, not hardcoded per icon. */

function stroke(color: string) {
  return { fill: "none", stroke: color, strokeWidth: 1.458, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
}

interface NavIconProps {
  color?: string;
}

export function ExecutiveIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 7 9" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[7.5px] absolute left-[2.5px] top-[2.5px] overflow-visible z-0">
        <path d="M1 0L6 0C6.5522847 0 7 0.44771522 7 1L7 8C7 8.5522852 6.5522847 9 6 9L1 9C0.44771522 9 0 8.5522852 0 8L0 1C0 0.44771522 0.44771522 0 1 0Z" {...s} />
      </svg>
      <svg viewBox="0 0 7 5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[4.167px] absolute left-[11.667px] top-[2.5px] overflow-visible z-10">
        <path d="M1 0L6 0C6.5522847 0 7 0.44771522 7 1L7 4C7 4.5522847 6.5522847 5 6 5L1 5C0.44771522 5 0 4.5522847 0 4L0 1C0 0.44771522 0.44771522 0 1 0Z" {...s} />
      </svg>
      <svg viewBox="0 0 7 9" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[7.5px] absolute left-[11.667px] top-[10px] overflow-visible z-20">
        <path d="M1 0L6 0C6.5522847 0 7 0.44771522 7 1L7 8C7 8.5522852 6.5522847 9 6 9L1 9C0.44771522 9 0 8.5522852 0 8L0 1C0 0.44771522 0.44771522 0 1 0Z" {...s} />
      </svg>
      <svg viewBox="0 0 7 5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[4.167px] absolute left-[2.5px] top-[13.333px] overflow-visible z-30">
        <path d="M1 0L6 0C6.5522847 0 7 0.44771522 7 1L7 4C7 4.5522847 6.5522847 5 6 5L1 5C0.44771522 5 0 4.5522847 0 4L0 1C0 0.44771522 0.44771522 0 1 0Z" {...s} />
      </svg>
    </div>
  );
}

export function NocOperationsIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 6 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5px] h-[5px] absolute left-[13.333px] top-[2.5px] overflow-visible z-0">
        <path d="M6 3C6 4.6568542 4.6568542 6 3 6C1.3431457 6 0 4.6568542 0 3C0 1.3431457 1.3431457 0 3 0C4.6568542 0 6 1.3431457 6 3Z" {...s} />
      </svg>
      <svg viewBox="-1.754887052783267e-31 0 20 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[11.667px] absolute left-[1.667px] top-[2.5px] overflow-visible z-10">
        <path d="M20 9L20 12C20 12.530433 19.789286 13.039141 19.414213 13.414213C19.039141 13.789286 18.530434 14 18 14L2 14C1.4695671 14 0.96085906 13.789286 0.58578634 13.414213C0.2107136 13.039141 4.4408921e-16 12.530433 0 12L0 2C-2.220446e-16 1.4695671 0.2107136 0.96085906 0.58578634 0.58578634C0.96085906 0.2107136 1.4695671 4.4408921e-16 2 0L11 0" {...s} />
      </svg>
      <svg viewBox="0 0 1 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[3.333px] absolute left-[10px] top-[14.167px] overflow-visible z-20">
        <path d="M0 0L0 4" {...s} />
      </svg>
      <svg viewBox="0 0 8 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6.667px] h-[1.458px] absolute left-[6.667px] top-[17.5px] overflow-visible z-30">
        <path d="M0 0L8 0" {...s} />
      </svg>
    </div>
  );
}

export function RootCauseIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 16 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[13.333px] h-[13.333px] absolute left-[2.5px] top-[2.5px] overflow-visible z-0">
        <path d="M16 8C16 12.418278 12.418278 16 8 16C3.5817218 16 0 12.418278 0 8C0 3.5817218 3.5817218 0 8 0C12.418278 0 16 3.5817218 16 8Z" {...s} />
      </svg>
      <svg viewBox="0 0 4.299999237060547 4.299999237060547" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.583px] h-[3.583px] absolute left-[13.917px] top-[13.917px] overflow-visible z-10">
        <path d="M4.2999992 4.2999992L0 0" {...s} />
      </svg>
    </div>
  );
}

export function HelpdeskIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="3.3297447491717784e-16 -6.353805574951645e-31 18 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[15px] h-[13.333px] absolute left-[2.5px] top-[1.667px] overflow-visible z-0">
        <path d="M1.3322676e-15 9L3 9C3.5304329 9 4.0391407 9.2107143 4.4142137 9.5857868C4.7892866 9.9608593 5 10.469567 5 11L5 14C5 14.530433 4.7892866 15.039141 4.4142137 15.414213C4.0391407 15.789286 3.5304329 16 3 16L2 16C1.4695671 16 0.96085906 15.789286 0.58578634 15.414213C0.2107136 15.039141 1.7763568e-15 14.530433 1.3322676e-15 14L1.3322676e-15 9ZM1.3322676e-15 9C-1.7611633e-08 7.8181033 0.23279178 6.6477795 0.6850841 5.5558491C1.1373764 4.4639187 1.8003116 3.471766 2.6360388 2.6360388C3.471766 1.8003116 4.4639187 1.1373765 5.5558491 0.68508422C6.6477795 0.23279187 7.8181033 1.110223e-15 9 0C10.181897 -4.4408921e-16 11.352221 0.23279187 12.444151 0.68508422C13.536081 1.1373765 14.528233 1.8003116 15.36396 2.6360388C16.199688 3.471766 16.862625 4.4639187 17.314917 5.5558491C17.767208 6.6477795 18 7.8181033 18 9L18 14C18 14.530433 17.789286 15.039141 17.414213 15.414213C17.039141 15.789286 16.530434 16 16 16L15 16C14.469567 16 13.960859 15.789286 13.585787 15.414213C13.210714 15.039141 13 14.530433 13 14L13 11C13 10.469567 13.210714 9.9608593 13.585787 9.5857868C13.960859 9.2107143 14.469567 9 15 9L18 9" {...s} />
      </svg>
      <svg viewBox="0 0 9 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[7.5px] h-[5px] absolute left-[10px] top-[13.333px] overflow-visible z-10">
        <path d="M9 0L9 2C9 3.0608659 8.5785723 4.0782809 7.8284264 4.8284264C7.0782809 5.5785718 6.0608659 6 5 6L0 6" {...s} />
      </svg>
    </div>
  );
}

export function SlaIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 20 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[16.667px] absolute left-[1.667px] top-[1.667px] overflow-visible z-0">
        <path d="M20 10C20 15.522848 15.522848 20 10 20C4.4771523 20 0 15.522848 0 10C0 4.4771523 4.4771523 0 10 0C15.522848 0 20 4.4771523 20 10Z" {...s} />
      </svg>
      <svg viewBox="0 0 12 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[10px] h-[10px] absolute left-[5px] top-[5px] overflow-visible z-10">
        <path d="M12 6C12 9.3137083 9.3137083 12 6 12C2.6862915 12 0 9.3137083 0 6C0 2.6862915 2.6862915 0 6 0C9.3137083 0 12 2.6862915 12 6Z" {...s} />
      </svg>
      <svg viewBox="0 0 4 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[3.333px] absolute left-[8.333px] top-[8.333px] overflow-visible z-20">
        <path d="M4 2C4 3.1045694 3.1045694 4 2 4C0.89543045 4 0 3.1045694 0 2C0 0.89543045 0.89543045 0 2 0C3.1045694 0 4 0.89543045 4 2Z" {...s} />
      </svg>
    </div>
  );
}

export function PartnerPerformanceIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 14 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[11.667px] h-[5px] absolute left-[1.667px] top-[12.5px] overflow-visible z-0">
        <path d="M14 6L14 4C14 2.9391341 13.578573 1.9217191 12.828427 1.1715736C12.078281 0.42142814 11.060866 3.5527137e-15 10 0L4 0C2.9391341 1.7763568e-15 1.9217184 0.42142814 1.1715729 1.1715736C0.42142743 1.9217191 1.3322676e-15 2.9391341 0 4L0 6" {...s} />
      </svg>
      <svg viewBox="0 0 8 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6.667px] h-[6.667px] absolute left-[4.167px] top-[2.5px] overflow-visible z-10">
        <path d="M8 4C8 6.2091389 6.2091389 8 4 8C1.7908609 8 0 6.2091389 0 4C0 1.7908609 1.7908609 0 4 0C6.2091389 0 8 1.7908609 8 4Z" {...s} />
      </svg>
      <svg viewBox="0 0 3 5.869999885559082" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.5px] h-[4.892px] absolute left-[15.833px] top-[12.608px] overflow-visible z-20">
        <path d="M3 5.8699999L3 3.8699999C2.9993389 2.9837277 2.7043557 2.122772 2.1613655 1.4223146C1.6183753 0.72185731 0.85812962 0.22156785 0 0" {...s} />
      </svg>
      <svg viewBox="0 0 3.007843017578125 7.75" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.507px] h-[6.458px] absolute left-[13.333px] top-[2.608px] overflow-visible z-30">
        <path d="M0 0C0.86041498 0.22030105 1.6230372 0.72070098 2.1676388 1.4223104C2.7122402 2.1239197 3.007843 2.9868298 3.007843 3.875C3.007843 4.7631702 2.7122402 5.6260796 2.1676388 6.3276892C1.6230372 7.0292988 0.86041498 7.5296988 0 7.75" {...s} />
      </svg>
    </div>
  );
}

export function AlertMonitoringIcon({ color = "#334155ff" }: NavIconProps) {
  const s = stroke(color);
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg viewBox="0 0 18 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[15px] h-[12.5px] absolute left-[2.5px] top-[1.667px] overflow-visible z-0">
        <path d="M3 6C3 4.4087009 3.6321411 2.8825774 4.7573595 1.7573593C5.8825779 0.63214099 7.4087009 1.3322676e-15 9 0C10.591299 8.8817842e-16 12.117423 0.63214099 13.242641 1.7573593C14.36786 2.8825774 15 4.4087009 15 6C15 13 18 15 18 15L0 15C0 15 3 13 3 6Z" {...s} />
      </svg>
      <svg viewBox="0 0 3.3999996185302734 1.0053348541259766" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.833px] h-[1.458px] absolute left-[8.583px] top-[17.5px] overflow-visible z-10">
        <path d="M0 0C0.16738246 0.30444062 0.41344833 0.55834556 0.71249104 0.73519135C1.0115337 0.91203713 1.3525794 1.0053349 1.6999998 1.0053349C2.0474203 1.0053349 2.3884659 0.91203713 2.6875086 0.73519135C2.9865513 0.55834556 3.2326171 0.30444062 3.3999996 0" {...s} />
      </svg>
      <svg viewBox="0 0 2 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.667px] h-[5px] absolute left-[1.667px] top-[1.667px] overflow-visible z-20">
        <path d="M2 0C0.79999995 1.7 0 3.7 0 6" {...s} />
      </svg>
      <svg viewBox="0 0 2 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.667px] h-[5px] absolute left-[16.667px] top-[1.667px] overflow-visible z-30">
        <path d="M2 6C2 3.7 1.2 1.7 0 0" {...s} />
      </svg>
    </div>
  );
}
