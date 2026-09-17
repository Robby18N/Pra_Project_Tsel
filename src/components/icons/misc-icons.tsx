/**
 * One-off decorative icons that don't belong to a specific section (chevron,
 * bell, sidebar collapse, filter glyph, small trend arrow). Icons specific to
 * a section (KPI icons, sidebar nav icons) live next to that section instead.
 */

export function ChevronDownIcon() {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg
        viewBox="0 0 12 6"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[8px] h-[4px] absolute left-[4px] top-[6px] overflow-visible z-0"
      >
        <path
          d="M0 0L6 6L12 0"
          fill="none"
          stroke="#64748bff"
          strokeWidth={1.333}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function CollapseSidebarIcon() {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 18 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[12px] h-[12px] absolute left-[2px] top-[2px] overflow-visible z-0">
        <path d="M2 0L16 0C17.10457 0 18 0.89543045 18 2L18 16C18 17.10457 17.10457 18 16 18L2 18C0.89543045 18 0 17.10457 0 16L0 2C0 0.89543045 0.89543045 0 2 0Z" fill="none" stroke="#000000ff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg viewBox="0 0 1 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1px] h-[12px] absolute left-[6px] top-[2px] overflow-visible z-10">
        <path d="M0 0L0 18" fill="none" stroke="#000000ff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export function ExpandSidebarIcon() {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 18 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[12px] h-[12px] absolute left-[2px] top-[2px] overflow-visible z-0">
        <path d="M2 0L16 0C17.10457 0 18 0.89543045 18 2L18 16C18 17.10457 17.10457 18 16 18L2 18C0.89543045 18 0 17.10457 0 16L0 2C0 0.89543045 0.89543045 0 2 0Z" fill="none" stroke="#334155ff" strokeWidth={1.333} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg viewBox="0 0 1 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.333px] h-[12px] absolute left-[6px] top-[2px] overflow-visible z-10">
        <path d="M0 0L0 18" fill="none" stroke="#334155ff" strokeWidth={1.333} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg viewBox="0 0 3 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2px] h-[4px] absolute left-[9.333px] top-[6px] overflow-visible z-20">
        <path d="M0 0L3 3L0 6" fill="none" stroke="#334155ff" strokeWidth={1.333} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export function FilterGlyphIcon() {
  const s = { fill: "none", stroke: "#64748bff", strokeWidth: 1.167, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 7 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4.667px] h-[1.167px] absolute left-[9.333px] top-[2.667px] overflow-visible z-0">
        <path d="M7 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 7 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4.667px] h-[1.167px] absolute left-[2px] top-[2.667px] overflow-visible z-10">
        <path d="M7 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 9 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6px] h-[1.167px] absolute left-[8px] top-[8px] overflow-visible z-20">
        <path d="M9 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 5 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.167px] absolute left-[2px] top-[8px] overflow-visible z-30">
        <path d="M5 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 5 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.167px] absolute left-[10.667px] top-[13.333px] overflow-visible z-40">
        <path d="M5 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 9 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6px] h-[1.167px] absolute left-[2px] top-[13.333px] overflow-visible z-50">
        <path d="M9 0L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 1 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.167px] h-[2.667px] absolute left-[9.333px] top-[1.333px] overflow-visible z-[60]">
        <path d="M0 0L0 4" {...s} />
      </svg>
      <svg viewBox="0 0 1 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.167px] h-[2.667px] absolute left-[5.333px] top-[6.667px] overflow-visible z-[70]">
        <path d="M0 0L0 4" {...s} />
      </svg>
      <svg viewBox="0 0 1 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.167px] h-[2.667px] absolute left-[10.667px] top-[12px] overflow-visible z-[80]">
        <path d="M0 0L0 4" {...s} />
      </svg>
    </div>
  );
}

export function BellIcon() {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative z-0">
      <svg
        viewBox="0 0 18 15"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[12px] h-[10px] absolute left-[2px] top-[1.333px] overflow-visible z-0"
      >
        <path
          d="M3 6C3 4.4087009 3.6321411 2.8825774 4.7573595 1.7573593C5.8825779 0.63214099 7.4087009 1.3322676e-15 9 0C10.591299 8.8817842e-16 12.117423 0.63214099 13.242641 1.7573593C14.36786 2.8825774 15 4.4087009 15 6C15 13 18 15 18 15L0 15C0 15 3 13 3 6Z"
          fill="none"
          stroke="#334155ff"
          strokeWidth={1.167}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        viewBox="0 0 3.3999996185302734 1.0053348541259766"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[2.267px] h-[1.167px] absolute left-[6.867px] top-[14px] overflow-visible z-10"
      >
        <path
          d="M0 0C0.16738246 0.30444062 0.41344833 0.55834556 0.71249104 0.73519135C1.0115337 0.91203713 1.3525794 1.0053349 1.6999998 1.0053349C2.0474203 1.0053349 2.3884659 0.91203713 2.6875086 0.73519135C2.9865513 0.55834556 3.2326171 0.30444062 3.3999996 0"
          fill="none"
          stroke="#334155ff"
          strokeWidth={1.167}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function TrendUpIcon({ color = "#16a34aff" }: { color?: string }) {
  const s = { fill: "none", stroke: color, strokeWidth: 1.333, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 20 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[13.333px] h-[6.667px] absolute left-[1.333px] top-[4.667px] overflow-visible z-0">
        <path d="M20 10L11.5 1.5L6.5 6.5L0 0" {...s} />
      </svg>
      <svg viewBox="0 0 6 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4px] h-[4px] absolute left-[10.667px] top-[7.333px] overflow-visible z-10">
        <path d="M0 6L6 6L6 0" {...s} />
      </svg>
    </div>
  );
}
