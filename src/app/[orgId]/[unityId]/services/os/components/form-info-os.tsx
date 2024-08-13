"use client";

import React from "react";
import { ArrowRight, CircleHelp, Clock, FilePlus2 } from "lucide-react";
import Button from "@/components/Button";
import ItemOsTable from "./items-os-table";
import { itemsRoot } from "@/lib/constants";
import { StatusItens } from "@/lib/constants";
import SheetNewItemOs from "./SheetNewItemOs";

const FormInfoOs = () => {
  const [checkedRowTable, setCheckedRowTable] = React.useState<number[]>([]);

  const [open, setOpen] = React.useState(false);

  const onPress = () => {
    setOpen(!open);
  };
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
          <Button onClick={onPress} size="full">
            <FilePlus2 size={16} />
          </Button>

          <SheetNewItemOs open={open} onPress={onPress} />
        </div>

        <ItemOsTable
          checkedRowTable={checkedRowTable}
          setCheckedRowTable={setCheckedRowTable}
          items={itemsRoot}
        />

        <div className="flex gap-4 max-sm:flex-col max-sm:pb-5  ">
          <div className="field px-2 flex w-full flex-col gap-2 max-sm:col-span-1">
            <label
              htmlFor="os-description"
              className="font-medium text-zinc-400"
            >
              Descrição
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <textarea
                name="os-description"
                id="os-description"
                placeholder="Descricão da OS"
                autoComplete="one-time-code"
                className="w-full h-32 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
          <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="os-status" className="font-medium text-zinc-400">
              Status
            </label>
            <div className="w-full h-max flex items-center gap-2 min-w-44 relative ">
              <Clock className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="os-status"
                id="os-status"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                {StatusItens.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button type="button" className="max-w-36">
            Enviar <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormInfoOs;
