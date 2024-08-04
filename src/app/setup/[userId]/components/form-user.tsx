"use client";
import ConfirmModal from "@/app/components/ConfirmModal";
import Button from "@/components/Button";
import {
  ArrowRight,
  Axe,
  CalendarDays,
  Dna,
  Fingerprint,
  HelpCircle,
  Mail,
  Phone,
  UserPen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const FormUser = ({
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
    if (setStep) {
      setStep(step! + 1);
    }
  };
  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden relative">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Dados pessoais:</h1>
        <HelpCircle size={20} className="text-primary" />
      </div>

      <form
        action=""
        className="flex flex-col gap-4 w-full overflow-hidden
  "
      >
        <div className="flex gap-5  w-full">
          <div className="field flex flex-col gap-2 flex-1">
            <label htmlFor="name" className="font-medium text-zinc-400">
              Nome
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <UserPen className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>
          <div className="field flex flex-col gap-2 flex-1">
            <label htmlFor="surname" className="font-medium text-zinc-400">
              Sobrenome
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <UserPen className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="surname"
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
          <div className="field w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="birthday" className="font-medium text-zinc-400">
              Data de nascimento
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <CalendarDays
                className="text-zinc-400 absolute left-2"
                size={20}
              />
              <input
                type="date"
                name="birthday"
                id="birthday"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
          "
              />
            </div>
          </div>

          <div className="field w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
            <label htmlFor="gender" className="font-medium text-zinc-400">
              Genero
            </label>
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Dna className="text-zinc-400 absolute left-2" size={20} />
              <select
                name="gender"
                id="gender"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 border border-zinc-800 text-slate-200 bg-zinc-950/60 px-2 pl-10  rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
               "
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="field flex w-full flex-col gap-2 flex-1 max-sm:col-span-2">
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
                name="document"
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
              Função Principal
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
                <option value="Masculino">Gerente</option>
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

export default FormUser;
