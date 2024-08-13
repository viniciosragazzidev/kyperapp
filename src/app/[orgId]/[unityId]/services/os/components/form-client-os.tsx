"use client";

import React from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CircleHelp,
  Crown,
  Dna,
  Fingerprint,
  Mail,
  Newspaper,
  Phone,
  UserPen,
} from "lucide-react";
import Button from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ServicesTableType } from "../../components/ServicesTable/table-services";
import { toast } from "sonner";

interface FormClientOSProps {
  currentStep: number;
  setCurrentStep: any;
  os: ServicesTableType | null;
  newOs: ServicesTableType | null;
  setNewOs: (service: ServicesTableType) => void;
}
const FormClientOS = ({
  currentStep,
  setCurrentStep,
  os,
  newOs,
  setNewOs,
}: FormClientOSProps) => {
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
    const newOsData: ServicesTableType = {
      client: [
        {
          name: data["name"],
          surname: data["surname"],
          brithDate: data["brithDate"],
          gender: data["gender"],
          document: data["document"],
          phone: data["phone"],
          email: data["email"],
          street: data["street"],
          number: data["number"],
          neighborhood: data["neighborhood"],
          city: data["city"],
          state: data["state"],
          zipCode: data["zipCode"],
        },
      ],
      amount: {
        value: 0,
        status: "Pendente",
      },
      os: os?.os || Math.floor(Math.random() * 1000) + "",
      created_at: new Date().toISOString(),
      id: os?.id || Math.floor(Math.random() * 1000),
      status: {
        label: "Aberto",
        value: "aberto",
      },
      unityId: os?.unityId || Math.floor(Math.random() * 1000) + "",
      items: os?.items || [],
      technician: os?.technician || "",
      description: os?.description || "",
    };

    if (formState.errors && Object.keys(formState.errors).length > 0) {
      return;
    } else {
      setNewOs(newOsData);
      toast.success("Cliente adicionado com sucesso!");
      setCurrentStep(currentStep + 1);
    }
  };

  React.useEffect(() => {
    if (newOs && Object.keys(newOs).length > 0) {
      setValue("name", newOs.client[0].name);
      setValue("surname", newOs.client[0].surname);
      setValue("brithDate", newOs.client[0].brithDate);
      setValue("gender", newOs.client[0].gender);
      setValue("document", newOs.client[0].document);
      setValue("phone", newOs.client[0].phone);
      setValue("email", newOs.client[0].email);
      setValue("street", newOs.client[0].street);
      setValue("number", newOs.client[0].number);
      setValue("neighborhood", newOs.client[0].neighborhood);
      setValue("city", newOs.client[0].city);
      setValue("state", newOs.client[0].state);
      setValue("zipCode", newOs.client[0].zipCode);
    }
    console.log(newOs);
  }, []);

  React.useEffect(() => {
    if (os && Object.keys(os).length > 0) {
      setValue("name", os.client[0].name);
      setValue("surname", os.client[0].surname);
      setValue("brithDate", os.client[0].brithDate);
      setValue("gender", os.client[0].gender);
      setValue("document", os.client[0].document);
      setValue("phone", os.client[0].phone);
      setValue("email", os.client[0].email);
      setValue("street", os.client[0].street);
      setValue("number", os.client[0].number);
      setValue("neighborhood", os.client[0].neighborhood);
      setValue("city", os.client[0].city);
      setValue("state", os.client[0].state);
      setValue("zipCode", os.client[0].zipCode);

      setNewOs(os);
    } else {
      return;
    }
  }, [os]);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="w-full flex justify-between items-center">
        <h2 className="font-semibold text-3xl text-zinc-200">
          Dados do Cliente:
        </h2>

        <span className="text-primary cursor-pointer hover:scale-[97%] active:scale-95 hover:opacity-80 transition-all">
          <CircleHelp size={20} />
        </span>
      </header>

      <div className="w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col gap-4"
          action=""
        >
          <div className="row flex w-full gap-5">
            <div className="field px-2 flex flex-col gap-2 flex-1">
              <label htmlFor="name" className="font-medium text-zinc-400">
                Nome
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <UserPen className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="name"
                  placeholder="Nome"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
            <div className="field px-2 flex flex-col gap-2 flex-1">
              <label htmlFor="surname" className="font-medium text-zinc-400">
                Sobrenome
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <UserPen className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="text"
                  {...register("surname", { required: true })}
                  id="surname"
                  placeholder="Sobrenome"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-5 max-sm:grid max-sm:grid-cols-2  w-full">
            <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="brithDate" className="font-medium text-zinc-400">
                Data de nascimento
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <CalendarDays
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="date"
                  {...register("brithDate", { required: true })}
                  id="brithDate"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>

            <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="gender" className="font-medium text-zinc-400">
                Genero
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Dna className="text-zinc-400 absolute left-2" size={20} />
                <select
                  {...register("gender", { required: true })}
                  id="gender"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
       "
                >
                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-2">
              <label htmlFor="document" className="font-medium text-zinc-400">
                CPF
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Fingerprint
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="text"
                  {...register("document", { required: true })}
                  id="document"
                  placeholder="000.000.000-00"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
            <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="phone" className="font-medium text-zinc-400">
                Telefone
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Phone className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  id="phone"
                  placeholder="(00) 00000-0000"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>

            <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="email" className="font-medium text-zinc-400">
                Email
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Mail className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="text"
                  {...register("email")}
                  id="email"
                  placeholder="email@email.com"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
          </div>

          <div className=" flex gap-5 max-sm:grid max-sm:grid-cols-2  w-full">
            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="street" className="font-medium text-zinc-400">
                Rua
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <input
                  type="text"
                  {...register("street", { required: true })}
                  id="street"
                  placeholder="Rua dos Bobos"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>

            <div className="field px-2 flex w-full max-w-[74px] flex-col gap-2 flex-grow-1 max-sm:col-span-1">
              <label htmlFor="number" className="font-medium text-zinc-400">
                N°
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <input
                  type="text"
                  {...register("number", { required: true })}
                  id="number"
                  placeholder="00"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>

            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
              <label
                htmlFor="neighborhood"
                className="font-medium text-zinc-400"
              >
                Bairro
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <input
                  type="text"
                  {...register("neighborhood", { required: true })}
                  id="neighborhood"
                  placeholder="Bairro dos Bobos"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>

            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
              <label htmlFor="zipCode" className="font-medium text-zinc-400">
                CEP
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <input
                  type="text"
                  {...register("zipCode", { required: true })}
                  id="zipCode"
                  placeholder="00000-000"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5  w-full">
            <div className="field px-2 flex flex-col gap-2 flex-1 max-w-56">
              <label htmlFor="city" className="font-medium text-zinc-400">
                Cidade
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Building2
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="text"
                  {...register("city", { required: true })}
                  id="city"
                  placeholder="Cidade dos Bobos"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
            <div className="field px-2 flex flex-col gap-2 flex-1 max-w-56">
              <label htmlFor="state" className="font-medium text-zinc-400">
                Estado
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Building2
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="text"
                  {...register("state", { required: true })}
                  id="state"
                  placeholder="SP"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
  "
                />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <Button type="submit" className="max-w-36">
              Próximo <ArrowRight size={20} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormClientOS;
