"use client";
import ConfirmModal from "@/app/components/ConfirmModal";
import Button from "@/components/Button";
import {
  ArrowRight,
  Axe,
  Building2,
  Fingerprint,
  HelpCircle,
  Mail,
  Phone,
  UserPen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const FormCompany = ({
  step,
  setStep,
}: {
  step?: number;
  setStep?: (step: number) => void;
}) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleNextStep = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    router.push("/");
  };
  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden relative">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Dados da Empresa:</h1>
        <HelpCircle size={20} className="text-primary" />
      </div>

      <form
        action=""
        className="flex flex-col gap-4 w-full overflow-hidden
  "
      >
        <div className="flex gap-5  w-full">
          <div className="field flex flex-col gap-2 flex-1">
            <label htmlFor="name-company" className="font-medium text-zinc-400">
              Nome Fantasia{" "}
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <UserPen className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="name-company"
                id="name-company"
                placeholder="Nome da Empresa"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
          <div className="field flex flex-col gap-2 flex-1">
            <label
              htmlFor="street-number-company"
              className="font-medium text-zinc-400"
            >
              CNPJ
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Fingerprint
                className="text-zinc-400 absolute left-2"
                size={20}
              />
              <input
                type="text"
                name="street-number-company"
                id="street-number-company"
                placeholder="00.000.000/0000-00"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
        </div>

        <div className=" flex gap-5 max-sm:grid max-sm:grid-cols-2  w-full">
          <div className="field flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="street-company"
              className="font-medium text-zinc-400"
            >
              Rua
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <input
                type="text"
                name="street-company"
                id="street-company"
                placeholder="Rua dos Bobos"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field flex w-full max-w-[74px] flex-col gap-2 flex-grow-1 max-sm:col-span-1">
            <label
              htmlFor="street-number-company"
              className="font-medium text-zinc-400"
            >
              N°
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <input
                type="text"
                name="street-number-company"
                id="street-number-company"
                placeholder="00"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="neighborhood-company"
              className="font-medium text-zinc-400"
            >
              Bairro
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <input
                type="text"
                name="neighborhood-company"
                id="neighborhood-company"
                placeholder="Bairro dos Bobos"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="cep-company" className="font-medium text-zinc-400">
              CEP
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <input
                type="text"
                name="cep-company"
                id="cep-company"
                placeholder="00000-000"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2  py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full">
          <div className="field flex flex-col gap-2 flex-1 max-w-56">
            <label htmlFor="city-company" className="font-medium text-zinc-400">
              Cidade
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Building2 className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="city-company"
                id="city-company"
                placeholder="Cidade dos Bobos"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
          <div className="field flex flex-col gap-2 flex-1 max-w-56">
            <label
              htmlFor="state-company"
              className="font-medium text-zinc-400"
            >
              Estado
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Building2 className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="state-company"
                id="state-company"
                placeholder="SP"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full max-sm:grid max-sm:grid-cols-2 ">
          <div className="field flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="phone" className="font-medium text-zinc-400">
              Telefone
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Phone className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(00) 00000-0000"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="email" className="font-medium text-zinc-400">
              Email
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Mail className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email@email.com"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label
              htmlFor="principal_function"
              className="font-medium text-zinc-400"
            >
              Área de Atuação
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Axe className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="principal_function"
                id="principal_function"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-1 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
               "
              >
                <option value="">Escolher área</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <Button type="button" className="max-w-36" onClick={handleNextStep}>
            Enviar <ArrowRight size={20} />
          </Button>
        </div>
      </form>

      <ConfirmModal open={open} onPress={handleConfirm} />
    </div>
  );
};

export default FormCompany;
