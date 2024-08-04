import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./components/sidebar";

import Navbar from "./components/Navbar";

export default function AppLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode;
  params: { orgId: string; unityId: string };
}) {
  return (
    <div className="flex w-screen h-screen relative ">
      <Sidebar />
      <ScrollArea className="w-full h-screen  ">
        <div className="w-full h-full max-w-6xl relative mx-auto space-y-8  pb-24 ">
          <Navbar params={params} />
          {children}
        </div>
      </ScrollArea>
    </div>
  );
}
