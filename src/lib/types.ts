export type labelType = {
  id: number;
  label: string;
  value: any;
};
export type StatusItem = "aberto" | "pendente" | "iniciado" | "pronto";
export type StatusType = {
  value: StatusItem;
  label: string;
  icon?: any;
};

export type osTableType = {
  id: number;
  unityId: string;
  os: string;
  client: [
    {
      name: string;
      surname: string;

      brithDate: string;
      gender: string;
      document: string;
      phone: string;
      email: string;
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
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
    status: string;
  };
  description: string;
};

export type itemOsAcessoriesType = {
  id: number;
  name: string;
};

export type itemOsCostType = {
  id: number;
  name: string;
  value: number;
};

export type itemOsTableType = {
  id: number;
  name: string;
  brand: string;
  model: string;
  serial: string;
  color: string;
  accessories?: itemOsAcessoriesType[];
  occurrence: string;

  status: StatusType;
  costs?: itemOsCostType[];
  technician: string;
  ocurrenceFinal?: string;

  totalCost?: number;
  amount: {
    value: number;
    status: string;
  };
  paymentsMethods: labelType[];
  garantyDays: labelType[];

  created_at: string;
  osId?: string;
};
