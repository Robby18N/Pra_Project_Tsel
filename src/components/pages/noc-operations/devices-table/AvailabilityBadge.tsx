import { Badge } from "@/components/ui/Badge";
import { availabilityTier } from "./devices-table-data";

const TIER_CLASSES = {
  green: { className: "bg-[#22c55e1a] border border-[#22c55e4d]", textClassName: "text-[#16a34aff]" },
  blue: { className: "bg-[#3b82f61a] border border-[#3b82f64d]", textClassName: "text-[#2563ebff]" },
  yellow: { className: "bg-[#eab3081a] border border-[#eab3084d]", textClassName: "text-[#a16207ff]" },
};

export function AvailabilityBadge({ availability }: { availability: number }) {
  const tier = availabilityTier(availability);
  const { className, textClassName } = TIER_CLASSES[tier];
  return (
    <Badge className={`p-[2px_10px] ${className}`} textClassName={`text-[12px]/[16px] font-medium ${textClassName}`}>
      {availability.toFixed(2)}%
    </Badge>
  );
}
