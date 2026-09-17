interface StatusDotProps {
  color: string;
  /** Draws the soft outer glow ring, as seen on the header's "Live monitoring" indicator. */
  pulse?: boolean;
  className?: string;
}

/** Small colored status dot, optionally with a soft glow ring behind it. */
export function StatusDot({ color, pulse = false, className = "" }: StatusDotProps) {
  return (
    <span className={`relative inline-block w-[8px] h-[8px] shrink-0 ${className}`}>
      {pulse && (
        <span
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0px 0px 0px 2.838px ${color}3d` }}
        />
      )}
      <span className="absolute inset-0 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}
