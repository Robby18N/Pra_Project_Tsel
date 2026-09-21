/** Icon used by every "Card KPI" tile on the Root Cause page — a colorable check-in-circle glyph, tinted to match each card's accent color. */
export function KpiCheckIcon({ color = "#2f5ee2ff" }: { color?: string }) {
  return (
    <div className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden relative">
      <svg
        viewBox="0 0 17.5 21.5"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="box-border w-[14.583px] h-[17.917px] absolute left-[2.708px] top-[1.042px] overflow-visible z-0"
      >
        <path
          d="M10.75 0C11.164213 0 11.5 0.33578643 11.5 0.75C11.5 1.1642135 11.164213 1.5 10.75 1.5L6.75 1.5C6.3357863 1.5 6 1.1642135 6 0.75C6 0.33578643 6.3357863 0 6.75 0L10.75 0ZM11.219727 9.2197266C11.51262 8.9268332 11.98738 8.9268332 12.280273 9.2197266C12.573166 9.51262 12.573166 9.98738 12.280273 10.280273L9.2802734 13.280273C8.98738 13.573166 8.51262 13.573166 8.2197266 13.280273C7.9268336 12.98738 7.9268336 12.51262 8.2197266 12.219727L11.219727 9.2197266ZM16 12.75C16 8.7459354 12.754065 5.5 8.75 5.5C4.7459354 5.5 1.5 8.7459354 1.5 12.75C1.5 16.754065 4.7459354 20 8.75 20C12.754065 20 16 16.754065 16 12.75ZM17.5 12.75C17.5 17.582493 13.582492 21.5 8.75 21.5C3.9175081 21.5 0 17.582493 0 12.75C0 7.9175081 3.9175081 4 8.75 4C13.582492 4 17.5 7.9175081 17.5 12.75Z"
          fill={color}
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}
