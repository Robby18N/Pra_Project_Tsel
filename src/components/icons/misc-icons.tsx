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

/** Empty checkbox glyph used as a decorative selection affordance on KPI tiles and list rows. */
export function UncheckedBoxIcon() {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] relative">
      <div className="box-border w-[14px] h-[14px] shadow-[0px_1px_1.75px_0px_#0000000d] absolute left-[1px] top-[1px] bg-white outline outline-1 outline-[#d4d4d4] rounded-[4px] z-0" />
    </div>
  );
}

/** Small double-checkmark ("delivered/acknowledged") glyph. */
export function DoubleCheckIcon({ color = "#334155ff" }: { color?: string }) {
  const s = { fill: "none", stroke: color, strokeWidth: 1.167, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 16 11" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[10.667px] h-[7.333px] absolute left-[1.333px] top-[4px] overflow-visible z-0">
        <path d="M16 0L5 11L0 6" {...s} />
      </svg>
      <svg viewBox="0 0 9 7.5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6px] h-[5px] absolute left-[8.667px] top-[6.667px] overflow-visible z-10">
        <path d="M9 0L1.5 7.5L0 6" {...s} />
      </svg>
    </div>
  );
}

/** Small trend arrow pointing down, used where a decrease is the story (e.g. "8% vs last month" on a repeat-incidents card). Mirrors `TrendUpIcon`'s style. */
export function TrendDownIcon({ color = "#16a34aff" }: { color?: string }) {
  const s = { fill: "none", stroke: color, strokeWidth: 1.333, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg viewBox="0 0 8 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.333px] h-[10px] absolute left-[5.333px] top-[3px] overflow-visible z-0">
        <path d="M4 0L4 14" {...s} />
      </svg>
      <svg viewBox="0 0 16 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[10.667px] h-[5.333px] absolute left-[2.667px] top-[8px] overflow-visible z-10">
        <path d="M0 0L8 8L16 0" {...s} />
      </svg>
    </div>
  );
}

/** Circular "reset" arrow used by the "Clear filters" action next to a FilterBar. */
export function ResetIcon({ color = "#475569ff" }: { color?: string }) {
  return (
    <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
      <svg
        viewBox="0 0 19.499889373779297 19.49988555908203"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[13px] h-[13px] absolute left-[1.5px] top-[1.5px] overflow-visible z-0"
      >
        <path
          d="M9.7498846 0C12.4692 0 15.064001 1.078841 17.009651 2.9492188L19.280159 5.2197266C19.573051 5.51262 19.573051 5.98738 19.280159 6.2802734C18.987265 6.573164 18.512506 6.5731659 18.219612 6.2802734L15.959846 4.0205078C14.286753 2.4173985 12.065503 1.5 9.7498846 1.5C8.1182671 1.5000007 6.5235405 1.9841862 5.1668773 2.890625C3.8101869 3.7971365 2.7522407 5.0853052 2.1278148 6.5927734C1.5034149 8.1002083 1.3398075 9.7590857 1.6580882 11.359375C1.9764161 12.959717 2.7621183 14.430201 3.9159007 15.583984C5.069684 16.737766 6.5401664 17.523468 8.1405096 17.841797C9.740799 18.160078 11.399675 17.996469 12.907111 17.37207C14.414579 16.747644 15.702749 15.689698 16.609261 14.333008C17.515699 12.976343 17.999886 11.381618 17.999886 9.75C17.999886 9.3357878 18.335674 9.0000019 18.749886 9C19.164099 9 19.499886 9.3357868 19.499886 9.75C19.499886 11.678368 18.927675 13.563613 17.856331 15.166992C16.785048 16.770151 15.262691 18.019894 13.48133 18.757812C11.69975 19.495768 9.7388554 19.688707 7.8475413 19.3125C5.9563189 18.936264 4.2188582 18.008036 2.8553538 16.644531C1.4918491 15.281026 0.56362092 13.543568 0.18738504 11.652344C-0.18882088 9.7610292 0.0041180849 7.8001342 0.74207252 6.0185547C1.4799931 4.2371931 2.7297339 2.714839 4.3328929 1.6435547C5.9362712 0.57221162 7.8215179 7.5412657e-07 9.7498846 0ZM17.999889 0.75C17.999889 0.33578643 18.335676 0 18.749889 0C19.164103 0 19.499889 0.33578643 19.499889 0.75L19.499889 5.75C19.499889 6.1642137 19.164103 6.5 18.749889 6.5L13.749889 6.5C13.335676 6.5 12.999889 6.1642137 12.999889 5.75C12.999889 5.3357863 13.335676 5 13.749889 5L17.999889 5L17.999889 0.75Z"
          fill={color}
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}
