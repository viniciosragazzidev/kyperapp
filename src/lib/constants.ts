import { Circle, CircleCheck, CircleHelp, Timer } from "lucide-react";
import { StatusType } from "./types";

export const StatusItens: StatusType[] = [
  {
    value: "aberto",
    label: "Aberto",
    icon: CircleHelp,
  },
  {
    value: "pendente",
    label: "Pendente",
    icon: Circle,
  },
  {
    value: "pronto",
    label: "Pronto",
    icon: CircleCheck,
  },
  {
    value: "iniciado",
    label: "Iniciado",
    icon: Timer,
  },
];
