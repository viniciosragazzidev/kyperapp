"use client";

import React from "react";
import { CircleHelp, FilePlus2 } from "lucide-react";
import Button from "@/components/Button";
import ItemOsTable from "./items-os-table";
import { itemsRoot } from "@/lib/constants";

const FormInfoOs = () => {
  const [checkedRowTable, setCheckedRowTable] = React.useState<number[]>([]);
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="w-full flex justify-between items-center">
        <h2 className="font-semibold text-3xl text-zinc-200">Dados da OS:</h2>

        <span className="text-primary cursor-pointer hover:scale-[97%] active:scale-95 hover:opacity-80 transition-all">
          <CircleHelp size={20} />
        </span>
      </header>

      <div className="w-full h-full">
        <div className="flex items-center justify-between">
          <h4 className="text-zinc-200 font-semibold text-xl w-full mr-auto block">
            Itens:
          </h4>
          <Button size="full">
            <FilePlus2 size={16} />
          </Button>
        </div>

        <ItemOsTable
          checkedRowTable={checkedRowTable}
          setCheckedRowTable={setCheckedRowTable}
          items={itemsRoot}
        />
      </div>
    </div>
  );
};

export default FormInfoOs;
