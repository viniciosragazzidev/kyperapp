"use client";

import React from "react";
import { ArrowRight, CircleHelp, Clock, FilePlus2 } from "lucide-react";
import Button from "@/components/Button";
import ItemOsTable, { ItemsTableType } from "./items-os-table";
import { itemsRoot } from "@/lib/constants";
import { StatusItens } from "@/lib/constants";
import SheetNewItemOs from "./SheetNewItemOs";
import { ServicesTableType } from "../../components/ServicesTable/table-services";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormInfoOsProps {
  currentStep: number;
  setCurrentStep: any;
  os: ServicesTableType | null;
  newOs: ServicesTableType | null;
  setNewOs: (service: ServicesTableType) => void;
}

const FormInfoOs = ({
  currentStep,
  setCurrentStep,
  os,
  newOs,
  setNewOs,
}: FormInfoOsProps) => {
  const [checkedRowTable, setCheckedRowTable] = React.useState<number[]>([]);

  const [open, setOpen] = React.useState(false);

  const onPress = () => {
    setOpen(!open);
  };

  const [currentOsItem, setCurrentOsItem] =
    React.useState<ItemsTableType | null>();

  const [osItemsList, setOsItemsList] = React.useState<ItemsTableType[]>([]);

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
    if (osItemsList.length > 0) {
      const currentStatus = StatusItens.find(
        (status) => status.value === data["os-status"]
      );
      const newOsData: ServicesTableType = {
        id: newOs?.id || os?.id || 1,
        os: String(newOs?.os || os?.os || Math.floor(Math.random() * 1000) + 1),
        client: [
          {
            name: newOs?.client[0].name || "",
            brithDate: newOs?.client[0].brithDate || "",
            document: newOs?.client[0].document || "",
            phone: newOs?.client[0].phone || "",
            email: newOs?.client[0].email || "",
            street: newOs?.client[0].street || "",
            number: newOs?.client[0].number || "",
            neighborhood: newOs?.client[0].neighborhood || "",
            city: newOs?.client[0].city || "",
            state: newOs?.client[0].state || "",
            zipCode: newOs?.client[0].zipCode || "",
            gender: newOs?.client[0].gender || "",
            surname: newOs?.client[0].surname || "",
          },
        ],

        items: osItemsList,
        technician: newOs?.technician || "",
        unityId: newOs?.unityId || "",
        amount: {
          status: "pendente",
          value: osItemsList.reduce(
            (total, item) => total + item.amount.value,
            0
          ),
        },
        status: {
          label: currentStatus?.label || "Aberto",
          value: currentStatus?.value || "aberto",
        },
        description: data["os-description"],
        created_at: new Date().toISOString(),
      };
      setNewOs(newOsData);
      toast.success("Ordem de Serviço criada com sucesso");
    } else {
      toast.error("Adicione pelo menos um item");
    }
  };

  React.useEffect(() => {
    if (newOs && Object.keys(newOs).length > 0) {
      if (
        newOs.items.every(
          (item) =>
            "id" in item && "name" in item && "brand" in item && "model" in item
        )
      ) {
        setOsItemsList(newOs.items as ItemsTableType[]);
      }
      setValue("os-status", newOs.status.value);
      setValue("os-technician", newOs.technician);
      setValue("os-description", newOs.description);
    }
  }, []);
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

          <SheetNewItemOs
            open={open}
            onPress={onPress}
            osItemsList={osItemsList}
            setOsItemsList={setOsItemsList}
            currentOsItem={currentOsItem || ({} as ItemsTableType)}
            setCurrentOsItem={setCurrentOsItem}
          />
        </div>

        <ItemOsTable
          checkedRowTable={checkedRowTable}
          setCheckedRowTable={setCheckedRowTable}
          items={osItemsList}
          currentOsItem={currentOsItem || ({} as ItemsTableType)}
          setCurrentOsItem={setCurrentOsItem}
          onPress={onPress}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-4 max-sm:flex-col max-sm:pb-5 flex-col  "
        >
          <div className="flex gap-4 max-sm:flex-col   ">
            <div className="field px-2 flex w-full flex-col gap-2 max-sm:col-span-1">
              <label
                htmlFor="os-description"
                className="font-medium text-zinc-400"
              >
                Descrição
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <textarea
                  {...register("os-description")}
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
                  {...register("os-status")}
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
            <Button type="submit" className="max-w-36">
              Criar OS <ArrowRight size={20} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormInfoOs;
