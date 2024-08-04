import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

export type StatusItem = "aberto" | "pendente" | "iniciado" | "pronto";
export type StatusType = {
  value: StatusItem;
  label: string;
  icon?: any;
};
