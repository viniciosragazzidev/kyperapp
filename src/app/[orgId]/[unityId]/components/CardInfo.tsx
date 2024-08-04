"use client";

import { cn } from "@/lib/utils";
import { Dot, Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardInfo = ({ ...props }: CardInfoProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full h-full min-h-40 text-slate-200 select-none backdrop-blur-sm bg-zinc-950   flex flex-col border relative border-zinc-800 pt-4 rounded-lg",
        props.className
      )}
    >
      <span className=" border w-7 h-7 absolute border-zinc-800 rounded-md  cursor-pointer group active:scale-105 active:shadow-sm active:shadow-zinc-800 right-4 flex items-center justify-center">
        <Ellipsis
          className="text-zinc-400 absolute group-hover:scale-95 transition-transform group-active:scale-90 "
          size={16}
        />
      </span>
      {props.children}
    </div>
  );
};

interface CardInfoBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardInfoBody = ({ ...props }: CardInfoBodyProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full h-full flex-1 flex flex-col gap-2 px-5 min-h-28 max-sm:min-h-20 ",
        props.className
      )}
    />
  );
};

interface CardInfoTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const CardInfoTitle = ({ ...props }: CardInfoTitleProps) => {
  return (
    <h3
      {...props}
      className={cn("text-xl font-bold text-zinc-200", props.className)}
    >
      {props.children}
    </h3>
  );
};

interface CardInfoValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  days?: number;
}

export const CardInfoValue = ({ ...props }: CardInfoValueProps) => {
  return (
    <span
      {...props}
      className={cn(
        "text-base text-zinc-200  flex items-center gap-0.5",
        props.className
      )}
    >
      {props.children} <Dot />{" "}
      <span className="text-xs text-zinc-400">
        Últimos {props.days || 7} Dias
      </span>
    </span>
  );
};

interface CardInfoNotificationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardInfoNotification = ({
  ...props
}: CardInfoNotificationProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full h-full min-h-12 max-sm:h-8  text-slate-200 px-5 flex gap-2 items-center border-t border-zinc-800",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

interface CardInfoNotificationAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
}

export const CardInfoNotificationAvatar = ({
  ...props
}: CardInfoNotificationAvatarProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-5 h-5  overflow-hidden relative rounded-full",
        props.className
      )}
    >
      <Image src={props.url} alt="Avatar" fill />
    </div>
  );
};
