import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  /** Background, border, padding and radius. */
  className?: string;
  /** Text color, weight and size. */
  textClassName?: string;
  icon?: ReactNode;
}

/**
 * Small pill used throughout the dashboard for statuses and counters
 * ("Live monitoring", "95.7% healthy", "Open", "Closed", trend deltas, ...).
 * Every usage differs in color/weight, so callers pass the exact utility
 * classes rather than picking from a fixed set of variants that wouldn't
 * faithfully match the source design anyway.
 */
export function Badge({ children, className = "", textClassName = "", icon }: BadgeProps) {
  return (
    <span
      className={`box-border inline-flex w-fit shrink-0 flex-row items-center justify-start gap-[6px] rounded-[9999px] whitespace-nowrap ${className}`}
    >
      {icon}
      <span className={`text-left whitespace-nowrap ${textClassName}`}>{children}</span>
    </span>
  );
}
