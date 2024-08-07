"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CircleCheck, CircleDashed, Ellipsis } from "lucide-react";
import { toast } from "sonner";

import StatusBadge from "../../../components/Table/StatusBadge";
import { CardInfoNotificationAvatar } from "../../../components/CardInfo";
import { itemTableType, osTableType, StatusType } from "@/lib/types";
import { brl, formateDate } from "@/lib/utils";
import TableServicesOptionsPopover from "../../components/ServicesTable/table-services-options-popover";

// Interface para definir o tipo de dado da tabela de serviços
export interface ItemsTableType extends itemTableType {}

// Componente principal da Tabela de Serviços
const ItemOsTable = ({
  items,
  setCheckedRowTable,
  checkedRowTable,
}: {
  items: ItemsTableType[];
  setCheckedRowTable: React.Dispatch<React.SetStateAction<number[]>>;
  checkedRowTable: number[];
}) => {
  // Função para selecionar/desmarcar todas as linhas da tabela
  const handleCheckAll = () => {
    if (checkedRowTable.length === items.length) {
      setCheckedRowTable([]);
      toast.warning("Todas as linhas selecionadas foram removidas");
    } else {
      setCheckedRowTable(items.map((item) => item.id));
      toast.success("Todas as linhas visiveis foram selecionadas");
    }
  };

  // Função para selecionar/desmarcar uma linha específica da tabela
  const handleCheckOne = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item && item.id) {
      if (checkedRowTable.includes(id)) {
        setCheckedRowTable(checkedRowTable.filter((item) => item !== id));
      } else {
        setCheckedRowTable([...checkedRowTable, id]);
      }
    }
  };

  return (
    <ScrollArea className="overflow-hidden backdrop-blur-sm py-4 relative max-lg:w-[calc(100vw-64px)] h-screen max-h-72 max-sm:w-[calc(100vw-32px)]">
      <div className="w-full relative block h-80 max-md:min-w-[800px] min-w-[500px]  ">
        {items && items.length > 0 ? (
          <table className="w-full h-full">
            <thead className="w-full text-left border-t-2 border-zinc-800">
              <tr>
                <th className="text-zinc-200 text-sm font-medium px-2 py-3">
                  <label
                    htmlFor=""
                    className="w-4 h-4 border border-zinc-800 block rounded-sm"
                  >
                    <input
                      type="checkbox"
                      onChange={handleCheckAll}
                      className="w-4 h-4"
                    />
                  </label>
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">Item</th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Técnico
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Status
                </th>
                <th className="text-zinc-200 text-sm font-medium px-2">
                  Valor
                </th>

                <th className="text-zinc-200 text-sm font-medium px-2"></th>
              </tr>
            </thead>

            <tbody className="w-full text-left">
              {items.map((item) => (
                <tr key={item.id} className="border-t border-zinc-900">
                  <td className="text-zinc-200 text-sm font-medium px-2 py-6">
                    <label
                      htmlFor=""
                      className="w-4 h-4 border border-zinc-800 block rounded-sm"
                    >
                      <input
                        type="checkbox"
                        checked={checkedRowTable.includes(item.id)}
                        onChange={() => handleCheckOne(item.id)}
                        className="w-4 h-4"
                      />
                    </label>
                  </td>
                  <td className="text-zinc-300 text-sm font-medium px-2">
                    <div className="flex flex-1 items-center">
                      <div className="flex flex-col flex-1">
                        <span className="text-zinc-200 text-sm font-medium">
                          {item.name}
                        </span>
                        <span className="text-zinc-600 text-sm">
                          {item.brand} / {item.model}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-zinc-600 text-sm font-medium px-2">
                    <div className="flex items-center gap-2">
                      <CardInfoNotificationAvatar url="https://avatars.githubusercontent.com/u/125518719?v=4" />
                      <span>{item.technician}</span>
                    </div>
                  </td>
                  <td className="text-zinc-300 text-sm font-medium px-2">
                    <StatusBadge status={item.status.value}>
                      {item.status.label}
                    </StatusBadge>
                  </td>

                  <td className="text-zinc-600 text-sm font-medium px-2">
                    <div className="flex items-center gap-2">
                      <span>
                        {item.amount.status === "pago" ? (
                          <CircleCheck className="text-primary" size={16} />
                        ) : (
                          <CircleDashed className="text-zinc-400" size={16} />
                        )}
                      </span>
                      <span>{brl.format(item.amount.value)}</span>
                    </div>
                  </td>
                  <TableServicesOptionsPopover idOs={item.id.toString()} />
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-screen h-full flex items-center justify-center ">
            <span className="text-zinc-500">Nenhum registro encontrado</span>
          </div>
        )}
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ItemOsTable;
