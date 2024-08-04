"use client";

import Button from "@/components/Button";
import Modal, { DescriptionModal, TitleModal } from "@/components/Modal";
import { ArrowRight, Building2, Code, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const SelectModeIngressModal = ({ open, onPress }: any) => {
  const [modeJoinOrg, setModeJoinOrg] = React.useState<boolean>(false);
  const navigate = useRouter();
  const submitModeIngress = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data["mode-ingress"] === "join-org") {
      setModeJoinOrg(true);
    } else {
      navigate.push("/setup/1");
    }
  };

  useEffect(() => {
    if (!open) setModeJoinOrg(false);
  }, [open]);
  return (
    <>
      {!modeJoinOrg ? (
        <Modal
          className="max-h-48"
          open={open}
          size="content"
          onPress={onPress}
        >
          <header>
            <TitleModal>Como deseja ingressar?</TitleModal>
            <DescriptionModal>
              Antes de continuar-mos, escolha como você deseja ingressar em uma
              organização.
            </DescriptionModal>
          </header>

          <form onSubmit={submitModeIngress} className="flex flex-col gap-6">
            <div className="content flex items-center w-full gap-3  max-sm:flex-col">
              <label
                htmlFor="create-org"
                className="w-full flex-1 text-nowrap text-sm"
              >
                <input
                  type="radio"
                  id="create-org"
                  name="mode-ingress"
                  className="hidden radio-input"
                  defaultChecked
                  value={"create-org"}
                />
                <span className="flex items-center gap-2   px-3 py-2 rounded-lg font-medium hover:opacity-85 transition-all w-full justify-center text-zinc-200 bg-zinc-800">
                  Criar uma organização <Building2 size={20} />
                </span>
              </label>

              <label htmlFor="join-org" className=" w-full text-nowrap text-sm">
                <input
                  type="radio"
                  id="join-org"
                  name="mode-ingress"
                  className="hidden radio-input"
                  value={"join-org"}
                />
                <span className="flex  items-center gap-2 px-3 py-2 rounded-lg font-medium hover:opacity-85 transition-all w-full justify-center text-zinc-200 bg-zinc-800">
                  Entrar em uma organização <Mail size={20} />
                </span>
              </label>
            </div>

            <Button className="text-sm">
              Continuar <ArrowRight />
            </Button>
          </form>
        </Modal>
      ) : (
        <Modal
          className="max-h-48"
          open={open}
          size="content"
          onPress={onPress}
        >
          <header>
            <TitleModal>Entrar por convite</TitleModal>
            <DescriptionModal>
              Informe abaixo o código de convite enviado para o email que foi
              gerado o convite.
            </DescriptionModal>
          </header>

          <form onSubmit={submitModeIngress} className="flex flex-col gap-6">
            <div className="flex flex-col items-end gap-1.5">
              <div className="input w-full flex flex-col gap-2">
                <div className="w-full h-full flex items-center gap-2 relative ">
                  <Code className="text-zinc-400 absolute left-2" size={20} />
                  <input
                    type="text"
                    name="code"
                    id="code"
                    placeholder="Digite o código"
                    autoComplete="one-time-code"
                    className="w-full h-full max-md:h-10 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
                  />
                </div>
              </div>
              <span className="text-sm text-zinc-400">
                Não possui um código?
              </span>
              <Button className="text-sm w-full mt-2">
                Entrar na organização <ArrowRight />
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default SelectModeIngressModal;
