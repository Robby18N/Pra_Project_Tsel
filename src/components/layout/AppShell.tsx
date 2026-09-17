import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar/Sidebar";

/**
 * Page-level frame: centers the fixed 1470px dashboard canvas, offsets the
 * scrollable content past the 289px sidebar rail, and renders the sidebar
 * itself. Keeping this here means `page.tsx` only has to list *what* goes on
 * the page, not *how* the shell is put together.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-auto bg-[#f1f5f9] flex justify-center">
      <div className="box-border w-[1470px] h-fit shrink-0 relative flex flex-col gap-0 justify-start items-start bg-[#f1f5f9]">
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 pl-[289px] justify-start items-start">
          {children}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
