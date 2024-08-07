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
const FormClientOS = () => {
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
        <form className="w-full h-full flex flex-col gap-4" action="">
          <div className="row flex w-full gap-5">
            <div className="field px-2 flex flex-col gap-2 flex-1">
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
            <div className="field px-2 flex flex-col gap-2 flex-1">
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
            <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
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

            <div className="field px-2 w-full flex flex-col gap-2 flex-1 max-sm:col-span-1">
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
            <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
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

            <div className="field px-2 flex flex-col gap-2 flex-1 max-sm:col-span-1">
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
          </div>

          <div className=" flex gap-5 max-sm:grid max-sm:grid-cols-2  w-full">
            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
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

            <div className="field px-2 flex w-full max-w-[74px] flex-col gap-2 flex-grow-1 max-sm:col-span-1">
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

            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
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

            <div className="field px-2 flex w-full flex-col gap-2 flex-1 max-sm:col-span-1">
              <label
                htmlFor="cep-company"
                className="font-medium text-zinc-400"
              >
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
            <div className="field px-2 flex flex-col gap-2 flex-1 max-w-56">
              <label
                htmlFor="city-company"
                className="font-medium text-zinc-400"
              >
                Cidade
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Building2
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
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
            <div className="field px-2 flex flex-col gap-2 flex-1 max-w-56">
              <label
                htmlFor="state-company"
                className="font-medium text-zinc-400"
              >
                Estado
              </label>
              <div className="w-full h-full flex items-center gap-2 relative ">
                <Building2
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
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

          <div className="flex w-full justify-end">
            <Button type="button" className="max-w-36">
              Enviar <ArrowRight size={20} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormClientOS;
