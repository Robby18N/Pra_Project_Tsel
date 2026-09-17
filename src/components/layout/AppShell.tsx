"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar/Sidebar";

/**
 * Page-level frame: centers the dashboard canvas (fluid up to the 1470px
 * design width, e.g. fits a 1440px viewport without horizontal scroll),
 * offsets the scrollable content past the sidebar rail, and renders the
 * sidebar itself. Owns the collapsed/expanded state so the content offset
 * (289px vs 76px) stays in step with the sidebar's own width. Keeping this
 * here means `page.tsx` only has to list *what* goes on the page, not *how*
 * the shell is put together.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen overflow-x-auto bg-[#f1f5f9] flex justify-center">
      <div className="box-border w-full max-w-[1470px] min-w-[1200px] h-fit shrink-0 relative flex flex-col gap-0 justify-start items-start bg-[#f1f5f9]">
        {/* Soft color washes so the glassmorphism cards have something to
            blur/tint — plain flat backgrounds make backdrop-blur invisible. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-[-140px] left-[8%] w-[440px] h-[440px] rounded-full bg-[#93c5fd66] blur-[110px]" />
          <div className="absolute top-[180px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#c4b5fd66] blur-[110px]" />
          <div className="absolute bottom-[-160px] left-[35%] w-[520px] h-[520px] rounded-full bg-[#f9a8d466] blur-[130px]" />
        </div>
        <div
          className={`relative z-[1] box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start transition-[padding] duration-200 ${
            collapsed ? "pl-[76px]" : "pl-[289px]"
          }`}
        >
          {children}
        </div>
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      </div>
    </div>
  );
}
