"use client";

import React, { useEffect } from "react";
import Sheet, { SheetTitle } from "@/components/sheet-custom";
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
  PaintBucket,
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
import { toast } from "sonner";
import { ItemsTableType } from "./items-os-table";

import { useForm, SubmitHandler } from "react-hook-form";

interface SheetProps {
  open: boolean;
  onPress: () => void;
  osItemsList: ItemsTableType[];
  setOsItemsList: (osItemsList: ItemsTableType[]) => void;
  currentOsItem?: ItemsTableType;
  setCurrentOsItem: (currentOsItem: ItemsTableType | null) => void;
}
const SheetNewItemOs = ({
  open,
  onPress,
  osItemsList,
  setOsItemsList,
  currentOsItem,
  setCurrentOsItem,
}: SheetProps) => {
  const [osItensAcessories, setOsItensAcessories] = React.useState<any[]>([]);

  const [osCostItems, setOsCostItems] = React.useState<any[]>([]);

  const [fieldOsItemAcessorie, setFieldOsItemAcessorie] = React.useState("");

  const handleAddItemAcessorie = () => {
    const newItem = {
      id: osItensAcessories.length + 1,
      name: fieldOsItemAcessorie,
    };

    setOsItensAcessories([newItem, ...osItensAcessories]);
    setFieldOsItemAcessorie("");
  };
  const handleRemoveItemAcessorie = (id: number) => {
    setOsItensAcessories(osItensAcessories.filter((item) => item.id !== id));
  };

  const [fieldOsCostItem, setFieldOsCostItem] = React.useState("");
  const [fieldOsCostItemValue, setFieldOsCostItemValue] = React.useState("");

  const handleAddCostItem = () => {
    if (fieldOsCostItem.length > 0 && fieldOsCostItemValue.length > 0) {
      const newItem = {
        id: osCostItems.length + 1,
        name: fieldOsCostItem,
        value: fieldOsCostItemValue,
      };
      setOsCostItems([newItem, ...osCostItems]);
      setFieldOsCostItem("");
      setFieldOsCostItemValue("");
    } else {
      toast.error("Preencha todos os campos");
    }
  };
  const handleRemoveCostItem = (id: number) => {
    setOsCostItems(osCostItems.filter((item) => item.id !== id));
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    const currentStatus = StatusItens.find(
      (status) => status.value === data["item-status"]
    );
    const newItem: ItemsTableType = {
      id: currentOsItem?.id || osItemsList ? osItemsList!.length + 1 : 1,
      name: data["item-name"],
      brand: data["item-brand"],
      model: data["item-model"],
      serial: data["item-serial"],
      color: data["item-color"],
      accessories: osItensAcessories,
      occurrence: data["item-occurrence"],
      status: {
        label: currentStatus?.label || "Aberto",
        value: currentStatus?.value || "aberto",
      },
      costs: osCostItems,
      technician: data["item-tech-resp"],
      ocurrenceFinal: data["item-final-occurrence"],
      totalCost: data["item-final-cost"],
      amount: {
        status: "pendente",
        value: data["item-final-budget"] || 0,
      },
      paymentsMethods: data["item-final-payment-method"],
      garantyDays: data["item-final-garanty-days"],
      created_at: new Date().toISOString(),
      osId: data["item-osId"],
    };

    if (formState.errors && Object.keys(formState.errors).length > 0) {
      toast.error("Preencha todos os campos");
    }

    if (formState.errors && Object.keys(formState.errors).length === 0) {
      if (currentOsItem && currentOsItem.id) {
        setOsItemsList(
          osItemsList.map((item) =>
            item.id === currentOsItem.id ? newItem : item
          )
        );
        toast.success("Item editado com sucesso");
      } else {
        setOsItemsList([...osItemsList, newItem]);
        toast.success("Item adicionado ao orcamento");
      }
      onPress();
      reset();
    }

    console.log(data);
  };

  useEffect(() => {
    if (currentOsItem && currentOsItem.id && open) {
      setValue("item-name", currentOsItem.name);
      setValue("item-brand", currentOsItem.brand);
      setValue("item-model", currentOsItem.model);
      setValue("item-serial", currentOsItem.serial);
      setValue("item-color", currentOsItem.color);
      setValue("item-occurrence", currentOsItem.occurrence);
      setValue("item-tech-resp", currentOsItem.technician);
      setValue("item-final-occurrence", currentOsItem.ocurrenceFinal);
      setValue("item-final-cost", currentOsItem.totalCost);
      setValue("item-final-budget", currentOsItem.amount.value);
      setValue("item-final-payment-method", currentOsItem.paymentsMethods);
      setValue("item-final-garanty-days", currentOsItem.garantyDays);

      setOsItensAcessories(currentOsItem.accessories || []);
      setOsCostItems(currentOsItem.costs || []);
      console.log(currentOsItem);
    }

    if (!open) {
      reset();
      setCurrentOsItem(null);
      setOsItensAcessories([]);
      setOsCostItems([]);
    }
  }, [currentOsItem, open]);

  return (
    <Sheet open={open} onPress={onPress}>
      <header>
        <SheetTitle>Dados do Item:</SheetTitle>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-6 flex flex-col gap-4"
      >
        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-name" className="font-medium text-zinc-400">
              Nome
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Box className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                {...register("item-name", { required: true })}
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
                {...register("item-brand", { required: true })}
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
                {...register("item-model", { required: true })}
                id="item-model"
                placeholder="Modelo"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>

          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="item-serial" className="font-medium text-zinc-400">
              N° de serie
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Dna className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                {...register("item-serial", { required: true })}
                id="item-serial"
                placeholder="000000000"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid  ">
          <div className="field px-2 flex flex-col gap-2 flex-1 ">
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
                {...register("item-color", { required: true })}
                id="item-color"
                placeholder="Preto"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid  ">
          <div className="field px-2 flex flex-col gap-2 flex-1 ">
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
                  value={fieldOsItemAcessorie}
                  onChange={(e: any) => setFieldOsItemAcessorie(e.target.value)}
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
                onClick={() => {
                  handleAddItemAcessorie();
                }}
              >
                <Plus size={18} className="flex-shrink-0" />
              </Button>
            </div>
            {osItensAcessories.length > 0 ? (
              <ScrollArea className="w-full h-min max-h-72 overflow-hidden">
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
                    {osItensAcessories.map((item) => (
                      <tr
                        key={item.id}
                        className=" border-b-2 border-zinc-800/50"
                      >
                        <td className="text-start text-sm max-w-[220px]">
                          <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                            {item.name}
                          </p>{" "}
                        </td>
                        <td className="text-end px-4 py-3">
                          <span
                            onClick={() => handleRemoveItemAcessorie(item.id)}
                            className="cursor-pointer"
                          >
                            <Trash size={14} className="flex-shrink-0" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollArea>
            ) : (
              <div className="w-full h-full flex items-center justify-center py-4">
                <h1 className="text-zinc-400 text-sm">
                  Nenhum item adicionado
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid  border-b-2 border-zinc-800/60 pb-5 ">
          <div className="field px-2 flex w-full flex-col gap-2 ">
            <label
              htmlFor="item-occurrence"
              className="font-medium text-zinc-400"
            >
              Ocorrência
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <textarea
                {...register("item-occurrence", { required: true })}
                id="item-occurrence"
                placeholder="Descreva a ocorência"
                autoComplete="one-time-code"
                className="w-full h-32 border border-zinc-800 resize-none text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5  w-full max-sm:grid  ">
          <div className="field px-2 w-full flex flex-col gap-2 flex-1 ">
            <label htmlFor="os-status" className="font-medium text-zinc-400">
              Status
            </label>
            <div className="w-full h-max flex items-center gap-2 min-w-44 relative ">
              <Clock className="text-zinc-400 absolute left-2" size={20} />
              <select
                {...register("os-status", { required: false })}
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

        <div className="flex gap-5  w-full max-sm:grid  ">
          <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="service-cost"
                className="font-medium text-zinc-400"
              >
                Custo do Serviço
              </label>

              <span
                onClick={handleAddCostItem}
                className="text-primary cursor-pointer hover:scale-[97%] active:scale-95 hover:opacity-80 transition-all"
              >
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
                  value={fieldOsCostItem}
                  onChange={(e) => setFieldOsCostItem(e.target.value)}
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>

              <div className="w-full  max-w-[110px] h-full flex items-center gap-2 relative ">
                <input
                  type="number"
                  name="item-cost-value"
                  id="item-cost-value"
                  placeholder="R$ 00,00"
                  autoComplete="one-time-code"
                  value={fieldOsCostItemValue}
                  onChange={(e) => setFieldOsCostItemValue(e.target.value)}
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
            {osCostItems.length > 0 ? (
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
                        <td className="text-start text-sm max-w-[220px]">
                          <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                            {item.name}
                          </p>{" "}
                        </td>
                        <td className="text-start text-sm max-w-[220px] ">
                          <p className="text-zinc-400 px-4 w-full overflow-hidden text-ellipsis flex-1 text-nowrap">
                            {brl.format(item.value)}
                          </p>{" "}
                        </td>
                        <td className="text-start text-sm max-w-[220px] py-2">
                          <span
                            className="cursor-pointer"
                            onClick={() => handleRemoveCostItem(item.id)}
                          >
                            <Trash size={14} className="flex-shrink-0" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollArea>
            ) : (
              <div className="w-full h-full flex items-center justify-center py-4">
                <h1 className="text-zinc-400 text-sm">
                  Nenhum item adicionado
                </h1>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid   ">
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
                {...register("item-tech-resp", { required: false })}
                id="item-tech-resp"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                <option value="">Selecione</option>
                {techniciansList.map((technician) => (
                  <option key={technician.id} value={technician.id}>
                    {technician.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid  border-b-2 border-zinc-800/60 pb-5 ">
          <div className="field px-2 flex w-full flex-col gap-2 max-sm:col-span-1">
            <label
              htmlFor="item-final-occurrence"
              className="font-medium text-zinc-400"
            >
              Descrição do Serviço
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <textarea
                {...register("item-final-occurrence", { required: false })}
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
                {...register("item-final-cost", { required: false })}
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
                {...register("item-final-budget", { required: false })}
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
                {...register("item-final-payment-method", { required: false })}
                id="item-final-payment-method"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                <option value="">Selecione</option>
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
                {...register("item-final-garanty-days", { required: false })}
                id="item-final-garanty-days"
                autoComplete="one-time-code"
                className="w-full   h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
              >
                <option value="">Selecione</option>
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
          <Button type="submit" className="max-w-36">
            Enviar <ArrowRight size={20} />
          </Button>
        </div>
      </form>
    </Sheet>
  );
};

export default SheetNewItemOs;
