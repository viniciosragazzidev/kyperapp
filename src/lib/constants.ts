import { Circle, CircleCheck, CircleHelp, Timer } from "lucide-react";
import { StatusType } from "./types";
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

export const servicesRoot: ServicesTableType[] = [
  {
    id: 1,
    unityId: "ab1019e7d4a1",
    os: "00123",
    client: [
      {
        name: "João Silva",
        contact: "joao.silva@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Guitarra",
        brand: "Fender",
        model: "Stratocaster",
      },
    ],
    status: {
      label: "Aberto",
      value: "aberto",
    },
    amount: {
      value: 350,
      status: "pendente",
    },
    created_at: "2024-08-01T10:00:00.000Z",
    technician: "Lucas",
  },
  {
    id: 2,
    unityId: "ab1019e7d4a1",
    os: "00124",
    client: [
      {
        name: "Maria Oliveira",
        contact: "maria.oliveira@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Piano",
        brand: "Yamaha",
        model: "U1",
      },
    ],
    status: {
      label: "Pronto",
      value: "pronto",
    },
    amount: {
      value: 1200,
      status: "pago",
    },
    created_at: "2024-08-02T11:30:00.000Z",
    technician: "Carlos",
  },
  {
    id: 3,
    unityId: "ab1019e7d4a1",
    os: "00125",
    client: [
      {
        name: "Carlos Souza",
        contact: "carlos.souza@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Violino",
        brand: "Stradivarius",
        model: "1713",
      },
    ],
    status: {
      label: "Pendente",
      value: "pendente",
    },
    amount: {
      value: 800,
      status: "pendente",
    },
    created_at: "2024-08-03T14:00:00.000Z",
    technician: "Ana",
  },
  {
    id: 4,
    unityId: "ab1019e7d4a1",
    os: "00126",
    client: [
      {
        name: "Fernanda Lima",
        contact: "fernanda.lima@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Saxofone",
        brand: "Selmer",
        model: "Mark VI",
      },
    ],
    status: {
      label: "Iniciado",
      value: "iniciado",
    },
    amount: {
      value: 500,
      status: "pendente",
    },
    created_at: "2024-08-04T15:00:00.000Z",
    technician: "Roberto",
  },
  {
    id: 5,
    unityId: "ab1019e7d4a1",
    os: "00127",
    client: [
      {
        name: "Gabriel Ferreira",
        contact: "gabriel.ferreira@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Bateria",
        brand: "Pearl",
        model: "Masters",
      },
    ],
    status: {
      label: "Pronto",
      value: "pronto",
    },
    amount: {
      value: 1000,
      status: "pago",
    },
    created_at: "2024-08-05T16:00:00.000Z",
    technician: "Marcos",
  },
  {
    id: 6,
    unityId: "ab1019e7d4a1",
    os: "00128",
    client: [
      {
        name: "Juliana Alves",
        contact: "juliana.alves@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Flauta",
        brand: "Yamaha",
        model: "YFL-222",
      },
    ],
    status: {
      label: "Iniciado",
      value: "iniciado",
    },
    amount: {
      value: 200,
      status: "pendente",
    },
    created_at: "2024-08-06T09:30:00.000Z",
    technician: "Paulo",
  },
  {
    id: 7,
    unityId: "ab1019e7d4a1",
    os: "00129",
    client: [
      {
        name: "Rafael Almeida",
        contact: "rafael.almeida@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Clarinete",
        brand: "Buffet Crampon",
        model: "R13",
      },
    ],
    status: {
      label: "Iniciado",
      value: "iniciado",
    },
    amount: {
      value: 300,
      status: "pendente",
    },
    created_at: "2024-08-07T12:00:00.000Z",
    technician: "Ricardo",
  },
  {
    id: 8,
    unityId: "ab1019e7d4a1",
    os: "00130",
    client: [
      {
        name: "Lucas Costa",
        contact: "lucas.costa@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Contrabaixo",
        brand: "Fender",
        model: "Precision Bass",
      },
    ],
    status: {
      label: "Pendente",
      value: "pendente",
    },
    amount: {
      value: 600,
      status: "pendente",
    },
    created_at: "2024-08-08T13:45:00.000Z",
    technician: "Pedro",
  },
  {
    id: 9,
    unityId: "ab1019e7d4a1",
    os: "00131",
    client: [
      {
        name: "Bruna Santos",
        contact: "bruna.santos@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Trompete",
        brand: "Bach",
        model: "Stradivarius",
      },
    ],
    status: {
      label: "Iniciado",
      value: "iniciado",
    },
    amount: {
      value: 450,
      status: "pendente",
    },
    created_at: "2024-08-09T14:00:00.000Z",
    technician: "Vinicius",
  },
  {
    id: 10,
    unityId: "ab1019e7d4a1",
    os: "00132",
    client: [
      {
        name: "Diego Rocha",
        contact: "diego.rocha@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Violão",
        brand: "Taylor",
        model: "314ce",
      },
    ],
    status: {
      label: "Pronto",
      value: "pronto",
    },
    amount: {
      value: 700,
      status: "pago",
    },
    created_at: "2024-08-10T15:30:00.000Z",
    technician: "Daniel",
  },
  {
    id: 11,
    unityId: "ab1019e7d4a1",
    os: "00133",
    client: [
      {
        name: "Renata Mendes",
        contact: "renata.mendes@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Teclado",
        brand: "Korg",
        model: "Kronos",
      },
    ],
    status: {
      label: "Pendente",
      value: "pendente",
    },
    amount: {
      value: 1100,
      status: "pendente",
    },
    created_at: "2024-08-11T16:15:00.000Z",
    technician: "Gustavo",
  },
  {
    id: 12,
    unityId: "ab1019e7d4a1",
    os: "00134",
    client: [
      {
        name: "Felipe Martins",
        contact: "felipe.martins@gmail.com",
      },
    ],
    items: [
      {
        id: 1,
        name: "Microfone",
        brand: "Shure",
        model: "SM58",
      },
    ],
    status: {
      label: "Iniciado",
      value: "iniciado",
    },
    amount: {
      value: 150,
      status: "pendente",
    },
    created_at: "2024-08-12T17:45:00.000Z",
    technician: "André",
  },
];
