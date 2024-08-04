"use client";
import { StatusItem, StatusType } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

interface StatusBadgeProps {
  children: React.ReactNode;
  status: StatusItem;
  className?: string;
}
const StatusBadge = ({ children, status, className }: StatusBadgeProps) => {
  const statusColorClass: { [key: string]: string } = {
    aberto: "text-green-500",
    pendente: "text-yellow-500",
    pronto: "bg-teal-950 text-teal-400",
    iniciado: "bg-yellow-950 text-yellow-400",
  };

  const [statusColor, setStatusColor] = React.useState<string>(
    statusColorClass[status]
  );

  React.useEffect(() => {
    setStatusColor(statusColorClass[status]);
  }, [status]);

  return (
    <span
      className={cn(
        "  px-4 py-1 text-sm font-medium rounded-full " +
          statusColor +
          " " +
          className
      )}
    >
      {children}
    </span>
  );
};

export default StatusBadge;