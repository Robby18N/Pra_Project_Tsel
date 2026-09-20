import type { ComponentType } from "react";
import { WhatsAppIcon, TelegramIcon } from "@/components/icons/channel-icons";

export interface ChannelDatum {
  name: string;
  icon: ComponentType;
  sentToday: number;
  deliveredPercent: number;
}

/** Per-channel delivery stats for today. */
export const CHANNEL_DELIVERY: ChannelDatum[] = [
  { name: "WhatsApp", icon: WhatsAppIcon, sentToday: 236, deliveredPercent: 99.6 },
  { name: "Telegram", icon: TelegramIcon, sentToday: 251, deliveredPercent: 99.8 },
];

export const AVERAGE_ACK_TIME_MINUTES = 4;
