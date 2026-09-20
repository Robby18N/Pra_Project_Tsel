import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { DoubleCheckIcon } from "@/components/icons/misc-icons";
import { CHANNEL_DELIVERY, AVERAGE_ACK_TIME_MINUTES } from "./channel-delivery-data";

/** "Channel delivery" card: per-channel send volume and delivery rate, plus the average ack time. */
export function ChannelDeliveryCard() {
  return (
    <Card className="w-full rounded-[12px] flex flex-col gap-[12px] p-[16px] justify-start items-start">
      <SectionHeading title="Channel delivery" subtitle="Across both messaging channels" />

      {CHANNEL_DELIVERY.map((channel) => {
        const Icon = channel.icon;
        return (
          <div
            key={channel.name}
            className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[12px] justify-start items-center bg-white border border-[#e2e8f0] rounded-[12px]"
          >
            <Icon />
            <div className="box-border flex-1 min-w-0 h-fit flex flex-col gap-0 justify-start items-start">
              <div className="text-[14px]/[20px] box-border text-[#020617ff] font-medium text-left whitespace-nowrap">
                {channel.name}
              </div>
              <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
                {channel.sentToday} sent today
              </div>
            </div>
            <Badge className="p-[4px_10px] bg-[#22c55e1a] border border-[#22c55e4d]" textClassName="text-[14px]/[20px] text-[#16a34aff] font-normal">
              {channel.deliveredPercent}%
            </Badge>
          </div>
        );
      })}

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[12px] justify-start items-center bg-[#f8fafcff] border border-[#e2e8f0] rounded-[12px]">
        <DoubleCheckIcon />
        <div className="text-[14px]/[20px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap">
          Acknowledged in {AVERAGE_ACK_TIME_MINUTES} minutes on average.
        </div>
      </div>
    </Card>
  );
}
