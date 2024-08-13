"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";

interface SheetProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  open: boolean;
  onPress: () => void;
}
const Sheet = ({ children, ...props }: SheetProps) => {
  const refDiv = useRef<HTMLDivElement>(null);
  const refMain = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (props.open) {
      refMain.current?.classList.remove("hidden");
      refMain.current?.classList.remove("opacity-0");

      setTimeout(() => {
        refDiv.current?.classList.remove("translate-x-full");
      }, 200);

      const keyEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          props.onPress();
        }
      };

      document.addEventListener("keydown", keyEsc);
    } else {
      refDiv.current?.classList.add("translate-x-full");

      setTimeout(() => {
        refMain.current?.classList.add("opacity-0");
      }, 200);

      setTimeout(() => {
        refMain.current?.classList.add("hidden");
      }, 300);
    }
  }, [props.open]);
  return (
    <main
      {...props}
      ref={refMain}
      className={cn(
        ` w-screen h-screen fixed top-0 left-0 z-50 bg-zinc-950/50 hidden backdrop-blur-sm  transition-opacity  `,
        props.className
      )}
    >
      <div
        ref={refDiv}
        className="w-full h-full p-5 max-w-[410px] absolute top-0 right-0 bg-zinc-950  border-l border-primary/40  translate-x-full transition-all"
      >
        <span className="z-[100]">
          <X
            className="text-zinc-400 cursor-pointer fixed z-[100] top-4 right-8 "
            onClick={() => props.onPress()}
          />
        </span>

        <ScrollArea className="w-full h-full  ">{children}</ScrollArea>
      </div>
    </main>
  );
};

export default Sheet;

interface SheetTitle extends React.ComponentPropsWithoutRef<"h1"> {
  children: React.ReactNode;
}
export const SheetTitle = ({ children, ...props }: SheetTitle) => {
  return (
    <h1
      {...props}
      className={cn("w-full text-2xl font-semibold ", props.className)}
    >
      {children}
    </h1>
  );
};

interface SheetDescription extends React.ComponentPropsWithoutRef<"p"> {
  children: React.ReactNode;
}
export const SheetDescription = ({ children, ...props }: SheetDescription) => {
  return (
    <p
      {...props}
      className={cn("w-full text-sm text-muted-foreground ", props.className)}
    >
      {children}
    </p>
  );
};
