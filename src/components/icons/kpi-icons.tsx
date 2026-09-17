/** Icons used inside the Key Figures KPI tiles. Each accepts a `color` so the same glyph can be reused with a different tint. */

const STROKE = {
  fill: "none",
  strokeWidth: 1.458,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export function CustomersIcon({ color = "#3b82f6ff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 12 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[10px] h-[16.667px] absolute left-[5px] top-[1.667px] overflow-visible z-0">
        <path d="M0 20L0 2C0 1.4695671 0.2107136 0.96085906 0.58578634 0.58578634C0.96085906 0.2107136 1.4695671 4.4408921e-16 2 0L10 0C10.530433 4.4408921e-16 11.039141 0.2107136 11.414213 0.58578634C11.789286 0.96085906 12 1.4695671 12 2L12 20L0 20Z" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[8.333px] absolute left-[1.667px] top-[10px] overflow-visible z-10">
        <path d="M4 0L2 0C1.4695671 0 0.96085906 0.21071407 0.58578634 0.58578682C0.2107136 0.96085954 4.4408921e-16 1.4695671 0 2L0 8C4.4408921e-16 8.5304327 0.2107136 9.0391407 0.58578634 9.4142132C0.96085906 9.7892857 1.4695671 10 2 10L4 10" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 13" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[10.833px] absolute left-[15px] top-[7.5px] overflow-visible z-20">
        <path d="M0 0L2 0C2.5304329 0 3.0391405 0.21071407 3.4142132 0.58578682C3.7892859 0.96085954 4 1.4695671 4 2L4 11C4 11.530433 3.7892859 12.039141 3.4142132 12.414213C3.0391405 12.789286 2.5304329 13 2 13L0 13" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.458px] absolute left-[8.333px] top-[5px] overflow-visible z-30">
        <path d="M0 0L4 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.458px] absolute left-[8.333px] top-[8.333px] overflow-visible z-40">
        <path d="M0 0L4 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.458px] absolute left-[8.333px] top-[11.667px] overflow-visible z-50">
        <path d="M0 0L4 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.333px] h-[1.458px] absolute left-[8.333px] top-[15px] overflow-visible z-[60]">
        <path d="M0 0L4 0" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}

export function PartnersIcon({ color = "#3b82f6ff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 14 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[11.667px] h-[5px] absolute left-[1.667px] top-[12.5px] overflow-visible z-0">
        <path d="M14 6L14 4C14 2.9391341 13.578573 1.9217191 12.828427 1.1715736C12.078281 0.42142814 11.060866 3.5527137e-15 10 0L4 0C2.9391341 1.7763568e-15 1.9217184 0.42142814 1.1715729 1.1715736C0.42142743 1.9217191 1.3322676e-15 2.9391341 0 4L0 6" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 8 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[6.667px] h-[6.667px] absolute left-[4.167px] top-[2.5px] overflow-visible z-10">
        <path d="M8 4C8 6.2091389 6.2091389 8 4 8C1.7908609 8 0 6.2091389 0 4C0 1.7908609 1.7908609 0 4 0C6.2091389 0 8 1.7908609 8 4Z" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 3 5.869999885559082" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.5px] h-[4.892px] absolute left-[15.833px] top-[12.608px] overflow-visible z-20">
        <path d="M3 5.8699999L3 3.8699999C2.9993389 2.9837277 2.7043557 2.122772 2.1613655 1.4223146C1.6183753 0.72185731 0.85812962 0.22156785 0 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 3.007843017578125 7.75" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[2.507px] h-[6.458px] absolute left-[13.333px] top-[2.608px] overflow-visible z-30">
        <path d="M0 0C0.86041498 0.22030105 1.6230372 0.72070098 2.1676388 1.4223104C2.7122402 2.1239197 3.007843 2.9868298 3.007843 3.875C3.007843 4.7631702 2.7122402 5.6260796 2.1676388 6.3276892C1.6230372 7.0292988 0.86041498 7.5296988 0 7.75" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}

export function ActiveProjectsIcon({ color = "#3b82f6ff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 20 17" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[14.167px] absolute left-[1.667px] top-[2.5px] overflow-visible z-0">
        <path d="M2 17L18 17C18.530434 17 19.039141 16.789286 19.414213 16.414213C19.789286 16.039141 20 15.530433 20 15L20 5C20 4.4695668 19.789286 3.9608591 19.414213 3.5857863C19.039141 3.2107136 18.530434 3 18 3L10.07 3C9.7405853 2.9982958 9.4166927 2.9152496 9.1270981 2.7582407C8.8375034 2.6012318 8.591176 2.3751216 8.4099998 2.0999999L7.5900002 0.9000001C7.4088244 0.62487835 7.1624961 0.39876801 6.8729019 0.24175906C6.5833077 0.084750101 6.2594142 0.0017042368 5.9299998 0L2 0C1.4695671 4.4408921e-16 0.96085906 0.2107136 0.58578634 0.58578634C0.2107136 0.96085906 4.4408921e-16 1.4695671 0 2L0 15C0 16.1 0.89999998 17 2 17Z" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 1 4" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[3.333px] absolute left-[6.667px] top-[8.333px] overflow-visible z-10">
        <path d="M0 0L0 4" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 1 2" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[1.667px] absolute left-[10px] top-[8.333px] overflow-visible z-20">
        <path d="M0 0L0 2" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 1 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[5px] absolute left-[13.333px] top-[8.333px] overflow-visible z-30">
        <path d="M0 0L0 6" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}

export function TotalDevicesIcon({ color = "#3b82f6ff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 20 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[6.667px] absolute left-[1.667px] top-[1.667px] overflow-visible z-0">
        <path d="M2 0L18 0C19.10457 0 20 0.89543045 20 2L20 6C20 7.1045694 19.10457 8 18 8L2 8C0.89543045 8 0 7.1045694 0 6L0 2C0 0.89543045 0.89543045 0 2 0Z" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 20 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[6.667px] absolute left-[1.667px] top-[11.667px] overflow-visible z-10">
        <path d="M2 0L18 0C19.10457 0 20 0.89543045 20 2L20 6C20 7.1045694 19.10457 8 18 8L2 8C0.89543045 8 0 7.1045694 0 6L0 2C0 0.89543045 0.89543045 0 2 0Z" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[1.458px] absolute left-[5px] top-[5px] overflow-visible z-20">
        <path d="M0 0L0.010000229 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[1.458px] absolute left-[5px] top-[15px] overflow-visible z-30">
        <path d="M0 0L0.010000229 0" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}

export function OnlineDevicesIcon({ color = "#22c55eff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[1.458px] absolute left-[10px] top-[16.667px] overflow-visible z-0">
        <path d="M0 0L0.010000229 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 -1.740281206335882e-30 20 3.81965970993042" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[3.183px] absolute left-[1.667px] top-[4.167px] overflow-visible z-10">
        <path d="M0 3.8196597C2.7501116 1.3598852 6.310338 -1.7763568e-15 10 0C13.689662 -1.7763568e-15 17.249889 1.3598852 20 3.8196597" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 14 2.858572006225586" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[11.667px] h-[2.382px] absolute left-[4.167px] top-[8.334px] overflow-visible z-20">
        <path d="M0 2.858572C1.8692886 1.0263027 4.3824725 1.7763568e-15 7 0C9.617527 1.7763568e-15 12.130712 1.0263027 14 2.858572" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 7 1.4292869567871094" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[1.458px] absolute left-[7.083px] top-[12.5px] overflow-visible z-30">
        <path d="M0 1.429287C0.93464428 0.5131523 2.1912363 0 3.5 0C4.8087635 0 6.0653558 0.5131523 7 1.429287" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}

export function OfflineDevicesIcon({ color = "#ef4444ff" }: { color?: string }) {
  return (
    <>
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.458px] h-[1.458px] absolute left-[10px] top-[16.667px] overflow-visible z-0">
        <path d="M0 0L0.010000229 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 7 1.4292869567871094" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[5.833px] h-[1.458px] absolute left-[7.083px] top-[12.5px] overflow-visible z-10">
        <path d="M0 1.429287C0.93464428 0.5131523 2.1912363 0 3.5 0C4.8087635 0 6.0653558 0.5131523 7 1.429287" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 5.170000076293945 2.690000534057617" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4.308px] h-[2.242px] absolute left-[4.167px] top-[8.474px] overflow-visible z-20">
        <path d="M0 2.6900005C1.4180275 1.2999088 3.2178087 0.36346498 5.1700001 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 2.006999969482422 1.5229997634887695" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[1.672px] h-[1.458px] absolute left-[14.161px] top-[9.447px] overflow-visible z-30">
        <path d="M2.007 1.5229998C1.4048829 0.932751 0.73053217 0.4210242 0 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 4.177000045776367 2.6429996490478516" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[3.481px] h-[2.202px] absolute left-[1.667px] top-[5.148px] overflow-visible z-40">
        <path d="M0 2.6429996C1.2365965 1.537075 2.6480899 0.64395183 4.177 0" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 11.288000106811523 3.8194239139556885" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[9.407px] h-[3.183px] absolute left-[8.927px] top-[4.167px] overflow-visible z-50">
        <path d="M11.288 3.8194239C9.762722 2.4552388 7.9744453 1.4175692 6.0331936 0.77025592C4.0919418 0.12294263 2.0387709 -0.12032329 0 0.055424541" stroke={color} {...STROKE} />
      </svg>
      <svg viewBox="0 0 20 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[16.667px] h-[16.667px] absolute left-[1.667px] top-[1.667px] overflow-visible z-[60]">
        <path d="M0 0L20 20" stroke={color} {...STROKE} />
      </svg>
    </>
  );
}
