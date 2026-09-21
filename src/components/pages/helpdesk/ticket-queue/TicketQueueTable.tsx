import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  TICKET_QUEUE,
  SEVERITY_BADGE_CLASSES,
  SLA_BADGE_CLASSES,
  STATUS_BADGE_CLASSES,
} from "./ticket-queue-data";

const COLUMNS = ["Ticket", "Customer", "Severity", "Owner", "Opened", "Aging", "SLA", "Status"];

/** "Active ticket queue" table — one row per open ticket, newest first. */
export function TicketQueueTable() {
  return (
    <Card className="w-full rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="Active ticket queue" subtitle="Select a row to open the ticket without leaving the list" />
      </div>
      <div className="box-border w-full h-fit shrink-0 p-[16px] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e2e8f0] bg-[#f8fafcff]">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className={`p-[8px_16px] text-[14px]/[20px] text-[#334155ff] font-semibold whitespace-nowrap ${
                    col === "Ticket" || col === "Customer" || col === "Owner" || col === "Opened" ? "text-left" : "text-center"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TICKET_QUEUE.map((row) => {
              const severityClasses = SEVERITY_BADGE_CLASSES[row.severity];
              const slaClasses = SLA_BADGE_CLASSES[row.sla];
              const isAtRisk = row.sla === "At Risk";
              return (
                <tr key={row.ticket} className="border-b border-[#e2e8f0] last:border-b-0 cursor-pointer hover:bg-[#f8fafcff]">
                  <td className="p-[10px_16px] text-[14px]/[20px] text-[#0f172aff] font-medium whitespace-nowrap">
                    {row.ticket}
                  </td>
                  <td className="p-[8px_16px]">
                    <div className="flex flex-col gap-0">
                      <div className="text-[14px]/[20px] text-[#0f172aff] font-normal whitespace-nowrap">{row.customer}</div>
                      <div className="text-[12px]/[16px] text-[#64748bff] font-normal whitespace-nowrap">{row.category}</div>
                    </div>
                  </td>
                  <td className="p-[8px_16px] text-center">
                    <div className="flex justify-center">
                      <Badge className={`p-[4px_10px] ${severityClasses.className}`} textClassName={`text-[12px]/[20px] font-normal ${severityClasses.textClassName}`}>
                        {row.severity}
                      </Badge>
                    </div>
                  </td>
                  <td className="p-[10px_16px] text-[14px]/[20px] text-[#0f172aff] font-normal whitespace-nowrap">
                    {row.owner}
                  </td>
                  <td className="p-[10px_16px] text-[14px]/[20px] text-[#0f172aff] font-normal whitespace-nowrap">
                    {row.opened}
                  </td>
                  <td
                    className={`p-[10px_16px] text-[14px]/[20px] text-right whitespace-nowrap ${
                      isAtRisk ? "text-[#b91c1cff] font-medium" : "text-[#020617ff] font-normal"
                    }`}
                  >
                    {row.aging}
                  </td>
                  <td className="p-[8px_16px] text-center">
                    <div className="flex justify-center">
                      <Badge className={`p-[4px_10px] ${slaClasses.className}`} textClassName={`text-[12px]/[20px] font-normal ${slaClasses.textClassName}`}>
                        {row.sla}
                      </Badge>
                    </div>
                  </td>
                  <td className="p-[8px_16px] text-center">
                    <div className="flex justify-center">
                      <Badge className={`p-[4px_10px] ${STATUS_BADGE_CLASSES[row.status]}`} textClassName="text-[12px]/[20px] text-white font-normal">
                        {row.status}
                      </Badge>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
