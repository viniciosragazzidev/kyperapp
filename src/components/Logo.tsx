import React from "react";
import { Monomaniac_One } from "next/font/google";
import { cn } from "@/lib/utils";

const monomaniacOne = Monomaniac_One({ subsets: ["latin"], weight: ["400"] });
interface LogoProps extends React.ComponentPropsWithoutRef<"div"> {
  mode: "simple" | "complete";
}
export function Logo({ mode, ...props }: LogoProps) {
  return (
    <div className={`flex items-center ${monomaniacOne.className}`}>
      {mode === "simple" ? (
        <div
          {...props}
          className={cn(
            `w-8 h-8  z-50 rounded-xl bg-zinc-200 text-zinc-900 font-bold  relative  text-2xl  text-center  ${props.className}`
          )}
        >
          <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            K
          </span>
        </div>
      ) : (
        <span
          {...props}
          className={cn(`text-4xl text-slate-200 uppercase ${props.className}`)}
        >
          {" "}
          Kyper{" "}
        </span>
      )}
    </div>
  );
}
