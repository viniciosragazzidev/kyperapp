import { Circle, CircleCheck, CircleHelp, Timer } from "lucide-react";
import { itemOsTableType, StatusType } from "./types";
import { ServicesTableType } from "@/app/[orgId]/[unityId]/services/components/ServicesTable/table-services";

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

export const servicesRoot: ServicesTableType[] = [];

export const itemsRoot: itemOsTableType[] = [
  {
    id: 1,
    name: "Violino",
    brand: "Stradivarius",
    model: "1713",
    serial: "123456789",
    color: "Preto",
    accessories: [
      {
        id: 1,
        name: "Corda",
      },
    ],
    created_at: "2024-07-15T09:00:00Z",
    amount: {
      status: "pendente",
      value: 500,
    },
    occurrence: "aaskljmkasmfkas asmfklasmfk auto-cols-frlaskfl",
    costs: [
      {
        id: 1,
        name: "Manutenção",
        value: 500,
      },
    ],
    totalCost: 500,
    garantyDays: [
      {
        id: 1,
        label: "Ate 30 dias",
        value: 30,
      },
    ],
    paymentsMethods: [
      {
        id: 1,
        label: "Crédito",
        value: "credit_card",
      },
    ],
    status: {
      label: "Pendente",
      value: "pendente",
    }, // Add this property
    technician: "John Doe", // Add this property
  },
];

export const techniciansList = [
  {
    id: 1,
    name: "Lucas Martins",
    created_at: "2024-07-15T09:00:00Z",
    contact: "11999999999",
  },
  {
    id: 2,
    name: "Mariana Costa",
    created_at: "2024-07-20T11:30:00Z",
    contact: "11999999999",
  },
  {
    id: 3,
    name: "Pedro Henrique",
    created_at: "2024-07-25T08:45:00Z",
    contact: "11999999999",
  },
];

export const paymentsMethods = [
  {
    id: 1,
    label: "Crédito",
    value: "credit_card",
  },
  {
    id: 2,
    label: "Boleto",
    value: "boleto",
  },
  {
    id: 3,
    label: "Pix",
    value: "pix",
  },
  {
    id: 4,
    label: "Dinheiro",
    value: "money",
  },
];

export const garantyDays = [
  {
    id: 1,
    label: "Ate 30 dias",
    value: "30",
  },
  {
    id: 2,
    label: "Ate 60 dias",
    value: "60",
  },
  {
    id: 3,
    label: "Ate 90 dias",
    value: "90",
  },
];
