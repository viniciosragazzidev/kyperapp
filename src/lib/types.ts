export type StatusItem = "aberto" | "pendente" | "iniciado" | "pronto";
export type StatusType = {
  value: StatusItem;
  label: string;
  icon?: any;
};

export type osTableType = {
  id: number;
  os: string;
  client: [
    {
      name: string;
      contact: string;
    }
  ];
  items: {
    id: number;
    name: string;
    brand: string;
    model: string;
  }[];
  status: StatusType;
  created_at: string;
  technician: string;
  amount: {
    value: number;
    status: "pago" | "pendente";
  };
};
