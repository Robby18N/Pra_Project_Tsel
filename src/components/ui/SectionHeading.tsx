interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Title + subtitle pair used at the top of every side panel (Service health,
 * Top 5 Customer availability, What needs attention).
 */
export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`box-border flex w-fit shrink-0 flex-col items-start justify-start gap-0 ${className}`}>
      <h3 className="text-[16px]/[24px] box-border text-[#020617] font-semibold text-left whitespace-nowrap overflow-hidden">
        {title}
      </h3>
      {subtitle && (
        <p className="text-[12px]/[16px] box-border pt-[2px] text-[#64748b] font-normal text-left whitespace-nowrap overflow-hidden">
          {subtitle}
        </p>
      )}
    </div>
  );
}
