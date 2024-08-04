import Button from "@/components/Button";
import { BriefcaseBusiness, Settings2, User } from "lucide-react";

export default function SetupLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen px-4 max-[325px]:px-0.5 md:px-8 xl:px-40 py-6 relative overflow-x-hidden">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-full h-16 px-3 sm:px-6 flex items-center justify-between bg-zinc-900 rounded-xl">
        <span className="text-zinc-200 flex gap-1 max-md:hidden">
          <User />
          Vinicios Ragazzi
        </span>
        <div className="flex items-center gap-10 max-md:w-full max-md:justify-between ">
          <span className="hidden text-zinc-200 max-md:flex">
            Complete as informações:
          </span>
          <span className="text-zinc-200 flex gap-1  max-md:hidden">
            <BriefcaseBusiness />
            Sem organização
          </span>

          <span className="w-px h-6 bg-zinc-600 max-md:hidden"></span>

          <Button className="max-md:max-w-min" color="secondary">
            <span className="max-md:hidden"> Alterar forma de ingresso</span>{" "}
            <Settings2 />{" "}
          </Button>
        </div>
      </nav>

      {children}
    </main>
  );
}
