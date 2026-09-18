import { Header } from "@/components/sections/header/Header";
import { Card } from "@/components/ui/Card";

interface ComingSoonPageProps {
  title: string;
}

/** Placeholder for sidebar destinations that don't have real content yet, so an unbuilt page never looks like a dead click. */
export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <>
      <Header title={title} subtitle="This section is not built yet" />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[20px] justify-start items-start">
        <Card className="w-full rounded-[12px] flex flex-col gap-[6px] p-[32px] justify-center items-center">
          <div className="text-[14px]/[20px] box-border text-[#334155ff] font-medium text-center">
            {title} is coming soon
          </div>
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-center">
            This page hasn&apos;t been designed yet — check back later.
          </div>
        </Card>
      </main>
    </>
  );
}
