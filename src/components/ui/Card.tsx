import type { ReactNode } from "react";

interface CardProps {
  /**
   * Layout, sizing and radius utilities are intentionally left to the caller
   * (e.g. `rounded-[12px] p-[16px] w-[373px]`) so this primitive stays a pure
   * "surface" — background, border and elevation only.
   */
  className?: string;
  children: ReactNode;
}

/**
 * Shared card surface used by every panel on the dashboard (KPI tiles, trend
 * cards, the service-health/customer/attention panels). Centralizing the
 * background + border + shadow here means a design tweak (e.g. the shadow
 * token) only has to change in one place.
 */
export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`box-border bg-white border border-[#e2e8f0] shadow-[0px_1px_1.531px_0px_#0000000d] ${className}`}
    >
      {children}
    </div>
  );
}
