"use client";

import React from "react";
import Sheet, { SheetDescription, SheetTitle } from "@/components/sheet-custom";
import {
  ArrowRight,
  Box,
  Cable,
  CircleDollarSign,
  Clock,
  Dna,
  HandCoins,
  HardHat,
  Hourglass,
  ListCheck,
  Mail,
  PaintBucket,
  Phone,
  Plus,
  Trash,
} from "lucide-react";
import Button from "@/components/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  garantyDays,
  paymentsMethods,
  StatusItens,
  techniciansList,
} from "@/lib/constants";
import { brl } from "@/lib/utils";
interface SheetProps {
  open: boolean;
  onPress: () => void;
}
const SheetNewItemOs = ({ open, onPress }: SheetProps) => {
  const [osItens, setOsItens] = React.useState([
    {
      id: 1,
      name: "Capa",
      brand: "brand",
      model: "model",
      color: "color",
    },
    {
      id: 2,
      name: "Bateria",
      brand: "brand",
      model: "model",
      color: "color",
    },
  ]);

  const [osCostItems, setOsCostItems] = React.useState([
    {
      id: 1,
      name: "Manutenção",
      value: 100,
    },
    {
      id: 2,
      name: "Manutenção",
      value: 100,
    },
  ]);
  return (
    <Sheet open={open} onPress={onPress}>
      <header>
        <SheetTitle>Dados do Item:</SheetTitle>
      </header>

      <form className="pt-6 flex flex-col gap-4" action="">
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-name" className="font-medium text-zinc-400">
              Nome
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Box className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="item-name"
                id="item-name"
                placeholder="Nome do Item"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>

          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-brand" className="font-medium text-zinc-400">
              Marca
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Box className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="item-brand"
                id="item-brand"
                placeholder="Marca"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-model" className="font-medium text-zinc-400">
              Modelo
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Box className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="item-model"
                id="item-model"
                placeholder="Modelo"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>

          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-serie" className="font-medium text-zinc-400">
              N° de serie
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Dna className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="item-serie"
                id="item-serie"
                placeholder="000000000"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-color" className="font-medium text-zinc-400">
              Cor
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <PaintBucket
                className="text-zinc-400 absolute left-2"
                size={20}
              />
              <input
                type="text"
                name="item-color"
                id="item-color"
                placeholder="Preto"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="item-acessories"
                className="font-medium text-zinc-400"
              >
                Acessórios
              </label>
            </div>
            <div className="flex gap-3">
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Cable className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="text"
                  name="item-acessories"
                  id="item-acessories"
                  placeholder="Nome do acessório"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
              <Button
                type="button"
                size="full"
                className=" flex-1 max-w-10"
                color="secondary"
              >
                <Plus size={18} className="flex-shrink-0" />
              </Button>
            </div>
            <ScrollArea className="w-full h-min overflow-hidden">
              <table>
                <thead className="bg-zinc-800/40  rounded-lg">
                  <tr className=" ">
                    <th className="w-full text-start text-sm font-bold py-2 px-4 ">
                      Item
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {osItens.map((item) => (
                    <tr
                      key={item.id}
                      className=" border-b-2 border-zinc-800/50"
                    >
                      <td className="text-start text-sm max-w-xs">
                        <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                          {item.name}
                        </p>{" "}
                      </td>
                      <td className="text-end px-4 py-3">
                        <span className="cursor-pointer">
                          <Trash size={14} className="flex-shrink-0" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollArea>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 border-b-2 border-zinc-800/60 pb-5 ">
          <div className="field px-2 flex w-full flex-col gap-2 max-sm:col-span-1">
            <label
              htmlFor="item-occurrence"
              className="font-medium text-zinc-400"
            >
              Ocorrência
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <textarea
                name="item-occurrence"
                id="item-occurrence"
                placeholder="Descreva a ocorência"
                autoComplete="one-time-code"
                className="w-full h-32 border border-zinc-800 resize-none text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2  ">
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

        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="service-cost"
                className="font-medium text-zinc-400"
              >
                Custo do Serviço
              </label>

              <span className="text-primary cursor-pointer hover:scale-[97%] active:scale-95 hover:opacity-80 transition-all">
                <Plus size={16} />
              </span>
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-full h-full flex  items-center gap-2 relative ">
                <ListCheck
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="text"
                  name="item-cost-name"
                  id="item-cost-name"
                  placeholder="Item"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>

              <div className="w-full  max-w-[110px] h-full flex items-center gap-2 relative ">
                <input
                  type="text"
                  name="item-cost-value"
                  id="item-cost-value"
                  placeholder="R$ 00,00"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
            <ScrollArea className="w-full h-min overflow-hidden">
              <table className="w-full ">
                <thead className="bg-zinc-800/40 w-full  rounded-lg">
                  <tr className="w-full ">
                    <th className=" text-start text-sm font-bold py-2 px-4 ">
                      Item
                    </th>
                    <th className=" text-start text-sm font-bold py-2 px-4 ">
                      Valor
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {osCostItems.map((item) => (
                    <tr
                      key={item.id}
                      className=" border-b-2 border-zinc-800/50"
                    >
                      <td className="text-start text-sm max-w-xs">
                        <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                          {item.name}
                        </p>{" "}
                      </td>
                      <td className="text-start text-sm max-w-xs ">
                        <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                          {brl.format(item.value)}
                        </p>{" "}
                      </td>
                      <td className="text-start text-sm max-w-xs py-2">
                        <span className="cursor-pointer">
                          <Trash size={14} className="flex-shrink-0" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollArea>
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2  ">
          <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="item-tech-resp"
              className="font-medium text-zinc-400"
            >
              Técnico Responsável
            </label>
            <div className="w-full h-max flex items-center gap-2 min-w-44 relative ">
              <HardHat className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="item-tech-resp"
                id="item-tech-resp"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                {techniciansList.map((technician) => (
                  <option key={technician.id} value={technician.id}>
                    {technician.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 border-b-2 border-zinc-800/60 pb-5 ">
          <div className="field px-2 flex w-full flex-col gap-2 max-sm:col-span-1">
            <label
              htmlFor="item-final-occurrence"
              className="font-medium text-zinc-400"
            >
              Descrição do Serviço
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <textarea
                name="item-final-occurrence"
                id="item-final-occurrence"
                placeholder="Descreva o serviço feito..."
                autoComplete="one-time-code"
                className="w-full h-32 border border-zinc-800 resize-none text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="item-final-cost"
              className="font-medium text-zinc-400"
            >
              Valor de Custo
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <CircleDollarSign
                className="text-zinc-400 absolute left-2"
                size={20}
              />
              <input
                type="text"
                name="item-final-cost"
                id="item-final-cost"
                placeholder="R$ 0,00"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>

          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="item-final-budget"
              className="font-medium text-zinc-400"
            >
              Valor do Orçamento
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <CircleDollarSign
                className="text-zinc-400 absolute left-2"
                size={20}
              />
              <input
                type="text"
                name="item-final-budget"
                id="item-final-budget"
                placeholder="R$ 0,00"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="item-final-payment-method"
              className="font-medium text-zinc-400"
            >
              Forma de Pagamento
            </label>
            <div className="w-full h-max flex items-center gap-2 min-w-44 relative ">
              <HandCoins className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="item-final-payment-method"
                id="item-final-payment-method"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                {paymentsMethods.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="item-final-garanty-days"
              className="font-medium text-zinc-400"
            >
              Prazo de Garantia
            </label>
            <div className="w-full h-max flex items-center gap-2 min-w-44 relative ">
              <Hourglass className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="item-final-garanty-days"
                id="item-final-garanty-days"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                {garantyDays.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end pr-4">
          <Button type="button" className="max-w-36">
            Enviar <ArrowRight size={20} />
          </Button>
        </div>
      </form>
    </Sheet>
  );
};

export default SheetNewItemOs;
