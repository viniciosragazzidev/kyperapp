"use client";

import Button from "@/components/Button";
import Modal, { DescriptionModal, TitleModal } from "@/components/Modal";
import {
  ArrowRight,
  Calendar,
  Dna,
  Mail,
  RectangleEllipsis,
  User,
  UserPen,
  X,
} from "lucide-react";
import React from "react";

const RegisterModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <span className="text-zinc-400 text-sm">
        Ainda não tem uma conta?{" "}
        <span
          className="text-zinc-200 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Crie uma agora!
        </span>
      </span>

      <Modal onPress={() => setIsOpen(false)} open={isOpen}>
        <header>
          <TitleModal>Junte-se á Ignix</TitleModal>
          <DescriptionModal>
            Informe abaixo os dados nescessários para criar sua conta.
          </DescriptionModal>
        </header>
        <form className="w-full flex flex-col gap-4" action="">
          <div className="field px-2 w-full flex items-center gap-2.5">
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="name"
              >
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
                  className="w-full h-full max-md:h-10 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                />
              </div>
            </div>
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="surname"
              >
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
                  className="w-full h-full max-md:h-10  text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                />
              </div>
            </div>
          </div>
          <div className="field px-2 w-full flex items-center gap-2.5">
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="birthdate"
              >
                Data de Nascimento
              </label>

              <div className="w-full h-full flex items-center gap-2 relative ">
                <Calendar className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 text-slate-200 border-none  bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                />
              </div>
            </div>
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="gender"
              >
                Gênero
              </label>

              <div className="w-full h-full flex items-center gap-2 relative ">
                <Dna className="text-zinc-400 absolute left-2" size={20} />
                <select
                  name="gender"
                  id="gender"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10  text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                     "
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field px-2 w-full flex items-center gap-2.5">
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="email"
              >
                Email
              </label>

              <div className="w-full h-full flex items-center gap-2 relative ">
                <Mail className="text-zinc-400 absolute left-2" size={20} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                />
              </div>
            </div>
            <div className="input w-full flex flex-col gap-2">
              <label
                className="font-medium text-zinc-400 text-sm"
                htmlFor="password"
              >
                Senha
              </label>

              <div className="w-full h-full flex items-center gap-2 relative ">
                <RectangleEllipsis
                  className="text-zinc-400 absolute left-2"
                  size={20}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                  autoComplete="one-time-code"
                  className="w-full h-full max-md:h-10  text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                />
              </div>
            </div>
          </div>

          <Button className="text-base">
            Criar Conta
            <ArrowRight className="text-primary-foreground" size={20} />
          </Button>
        </form>{" "}
      </Modal>
    </>
  );
};

export default RegisterModal;
