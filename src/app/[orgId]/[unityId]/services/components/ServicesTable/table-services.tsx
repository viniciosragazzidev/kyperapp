"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import StatusBadge from "../../../components/Table/StatusBadge";
import { CardInfoNotificationAvatar } from "../../../components/CardInfo";
import { CircleCheck, CircleDashed, Ellipsis } from "lucide-react";
import { StatusType } from "@/lib/types";
import { brl, formateDate } from "@/lib/utils";

export interface ServicesTableType {
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
}
const TableServices = ({ services }: { services: ServicesTableType[] }) => {
  return (
    <ScrollArea className=" overflow-hidden backdrop-blur-sm py-4 relative max-lg:w-[calc(100vw-64px)] max-sm:w-[calc(100vw-32px)]">
      <div className="w-full relative  block min-h-14 min-w-[800px] ">
        {services && services.length > 0 ? (
          <table className="w-full   ">
            <thead className="w-full text-left border-t-2 border-zinc-800">
              <tr className="">
                <th className="text-zinc-200 text-sm font-medium px-2 py-3">
                  <label
                    htmlFor=""
                    className="w-4 h-4 border border-zinc-800 block rounded-sm"
                  >
                    <input type="checkbox" className="w-4 h-4 hidden" />
                  </label>
                </th>

                <th className="text-zinc-200 text-sm font-medium px-2">OS</th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Cliente
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Itens
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Status
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Entrada
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Técnico Resp.
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Valor
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2"></th>
              </tr>
            </thead>

            <tbody className="w-full text-left">
              {services.map((service) => (
                <tr key={service.id} className="border-t border-zinc-900 ">
                  <td className="text-zinc-200 text-sm font-medium px-2  py-6">
                    <label
                      htmlFor=""
                      className="w-4 h-4 border border-zinc-800 block rounded-sm"
                    >
                      <input type="checkbox" className="w-4 h-4 hidden" />
                    </label>
                  </td>
                  <td className="text-zinc-600 text-sm font-medium px-2">
                    #{service.os}
                  </td>
                  <td className="text-zinc-300 text-sm font-medium px-2">
                    <div className="flex flex-col">
                      <span className="text-zinc-200 text-sm font-medium ">
                        {service.client[0].name}
                      </span>
                      <span className="text-zinc-600 text-sm">
                        {service.client[0].contact}
                      </span>
                    </div>
                  </td>
                  <td className="text-zinc-300 text-sm font-medium ">
                    <div className="flex flex-1 items-center ">
                      <div className="flex flex-col flex-1">
                        <span className="text-zinc-200 text-sm font-medium ">
                          {service.items[0].name}
                        </span>
                        <span className="text-zinc-600 text-sm">
                          {service.items[0].brand} / {service.items[0].model}{" "}
                        </span>
                      </div>
                      {service.items.length > 1 && (
                        <div className="w-6 h-5 py-3  flex items-center mr-4 text-xs font-bold justify-center bg-teal-950 px-1 text-teal-400 rounded-full">
                          <span>+{service.items.length - 1}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="text-zinc-300 text-sm font-medium px-2">
                    <StatusBadge status={service.status.value}>
                      {service.status.label}
                    </StatusBadge>
                  </td>
                  <td className="text-zinc-600 text-sm font-medium px-2">
                    {service.created_at &&
                      formateDate(new Date(service.created_at))}
                  </td>
                  <td className="text-zinc-600 text-sm font-medium px-2">
                    <div className="flex items-center gap-2">
                      <CardInfoNotificationAvatar url="https://avatars.githubusercontent.com/u/125518719?v=4" />

                      <span>{service.technician}</span>
                    </div>
                  </td>

                  <td className="text-zinc-600 text-sm font-medium px-2">
                    <div className="flex items-center gap-2">
                      <span>
                        {service.amount.status === "pago" ? (
                          <CircleCheck className="text-primary" size={16} />
                        ) : (
                          <CircleDashed className="text-zinc-400" size={16} />
                        )}
                      </span>
                      <span>{brl.format(service.amount.value)}</span>
                    </div>
                  </td>

                  <td className="text-zinc-600 text-sm font-medium px-2 w-min">
                    <span className=" border w-7 h-7  border-zinc-800 rounded-md  cursor-pointer group active:scale-105 active:shadow-sm active:shadow-zinc-800 right-4 flex items-center justify-center">
                      <Ellipsis
                        className="text-zinc-400  group-hover:scale-95 transition-transform group-active:scale-90 "
                        size={16}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-zinc-500">Nenhum registro encontrado</span>
          </div>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TableServices;
