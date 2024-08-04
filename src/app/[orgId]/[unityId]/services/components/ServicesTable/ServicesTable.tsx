"use client";

import Button from "@/components/Button";
import { FilePlus, Search } from "lucide-react";
import React from "react";

import TableServices, { ServicesTableType } from "./table-services";

import { StatusType } from "@/lib/types";
import TableServicesStatusPopover from "./table-services-status-popover";
import NavigationBar from "../../../components/Table/NavigationBar";
const ServicesTable = () => {
  const [selectedStatus, setSelectedStatus] = React.useState<
    StatusType[] | null
  >(null);

  const servicesRoot: ServicesTableType[] = [
    {
      id: 1,
      os: "55523",
      client: [
        {
          name: "Nome do cliente 1",
          contact: "Contato do cliente 1",
        },
      ],
      items: [
        {
          id: 1,
          name: "Item 1",
          brand: "Weril",
          model: "h553",
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
      created_at: "2024-08-04T15:15:15.000Z",
      technician: "Lucas",
    },
    {
      id: 2,
      os: "55524",
      client: [
        {
          name: "Nome do cliente 2",
          contact: "Contato do cliente 2",
        },
      ],
      items: [
        {
          id: 1,
          name: "Item 1",
          brand: "Weril",
          model: "h553",
        },
        {
          id: 2,
          name: "Item 2",
          brand: "Weril2",
          model: "h553",
        },
      ],
      status: {
        label: "Pronto",
        value: "pronto",
      },
      amount: {
        value: 2300,
        status: "pago",
      },
      created_at: "2024-08-04T15:15:15.000Z",
      technician: "Lucas",
    },
  ];

  const services = servicesRoot.filter((service) => {
    if (selectedStatus) {
      if (selectedStatus.length > 0) {
        return selectedStatus.some(
          (status) => status.value === service.status.value
        );
      } else {
        return true;
      }
    }
    return true;
  });

  return (
    <>
      <div className=" w-full px-4   overflow-hidden relative  flex flex-col gap-5">
        <header className="w-full flex  justify-between items-center">
          <h1 className="text-zinc-200 text-lg font-semibold mr-auto block w-full ">
            Lista de OS
          </h1>
          <Button className="flex-1">
            <FilePlus size={14} />
          </Button>
        </header>
        <div className="flex w-full gap-2">
          <div className="w-full h-full max-w-60 flex items-center gap-2 max-md:h-11 border border-dashed border-zinc-700/80 rounded-full px-3 py-2 text-zinc-600">
            <Search size={16} />
            <input
              type="email"
              placeholder="Buscar OS"
              className={`w-full h-full bg-transparent  placeholder:text-zinc-600 outline-none text-sm placeholder:text-sm  focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all`}
            />
          </div>
          <TableServicesStatusPopover
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
          />
        </div>

        <TableServices services={services} />

        <NavigationBar itemsLength={50} />
      </div>
    </>
  );
};

export default ServicesTable;
