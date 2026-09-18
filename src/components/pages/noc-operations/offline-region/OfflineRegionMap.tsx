import { REGION_DATA, MAX_REGION_COUNT, regionColor } from "./offline-region-data";

/**
 * Simplified stand-in for the source design's hand-drawn Indonesia heatmap:
 * a dot per region, positioned roughly per its real geography, sized and
 * colored by offline-device count.
 */
export function OfflineRegionMap() {
  return (
    <div className="box-border w-full h-[180px] shrink-0 relative rounded-[8px] bg-[#f8fafcff] border border-[#e2e8f0] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="noc-region-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e2e8f0" strokeWidth={1} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#noc-region-grid)" />
      </svg>
      {REGION_DATA.map((r) => {
        const size = 14 + (r.count / MAX_REGION_COUNT) * 22;
        return (
          <div
            key={r.region}
            title={`${r.region}: ${r.count} offline`}
            className="absolute rounded-full flex items-center justify-center text-white font-semibold"
            style={{
              left: `${r.x}%`,
              top: `${r.y}%`,
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              backgroundColor: regionColor(r.count),
              fontSize: 9,
              boxShadow: "0 0 0 3px #ffffffb3",
            }}
          >
            {r.count}
          </div>
        );
      })}
    </div>
  );
}
