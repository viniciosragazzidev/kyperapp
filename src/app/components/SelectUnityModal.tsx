"use client";

import Button from "@/components/Button";
import Modal, { DescriptionModal, TitleModal } from "@/components/Modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRight,
  CheckCircle,
  CircleDashed,
  LockKeyhole,
  Search,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { toast } from "sonner";

const SelectUnityModal = ({
  open,
  onPress,
  setCurrentUnity,
  navigateTo,
}: any) => {
  const [unityChecked, setUnityChecked] = React.useState({
    id: "",
    name: "",
    active: false,
  });
  const units = [
    { id: "ab1019e7d4a1", name: "Unidade Central", active: true },
    { id: "ab1019e7d4a2", name: "Unidade São José do Rio Preto", active: true },
    { id: "ab1019e7d4a3", name: "Unidade Campinas", active: false },
    { id: "ab1019e7d4a4", name: "Unidade Ribeirão Preto", active: false },
    { id: "ab1019e7d4a5", name: "Unidade Bauru", active: false },
  ];

  const router = useRouter();
  const params = useParams();

  const submitUnity = (e: any) => {
    e.preventDefault();
    setCurrentUnity(unityChecked);
    if (navigateTo) {
      router.push(`/${navigateTo}/${unityChecked.id || params.unityId}`);
    } else {
      toast.success(`${unityChecked.name} foi selecionada`);
    }
    onPress();
  };

  useEffect(() => {
    if (params.unityId) {
      const unity = units.find((u) => u.id === params.unityId);

      if (unity && unity.active) {
        setUnityChecked(unity);
      }
    }
  }, [open]);

  return (
    <>
      <Modal className="max-h-48" open={open} size="content" onPress={onPress}>
        <header>
          <TitleModal>Selecione uma unidade</TitleModal>
          <DescriptionModal>
            Escolha abaixo a unidade que você deseja acessar dentro da
            organização atual.
          </DescriptionModal>
        </header>

        <div className="flex flex-col items-end gap-1.5">
          <div className="input w-full flex flex-col gap-2">
            <div className="w-full h-full flex items-center gap-2 relative ">
              <Search className="text-zinc-400 absolute left-2" size={20} />
              <input
                type="text"
                name="unit-name"
                id="unit-name"
                placeholder="Nome da unidade"
                autoComplete="one-time-code"
                className="w-full h-full max-md:h-10 text-slate-200 bg-zinc-950/60 px-2 pl-10 py-3 rounded-lg text-sm  focus:outline-primary/50  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all
                "
              />
            </div>
          </div>
        </div>
        <form onSubmit={submitUnity} className="flex flex-col   gap-5">
          <ScrollArea className=" h-[200px] relative">
            <div className="flex flex-col gap-4">
              {units.map((unit) => (
                <>
                  <label
                    key={unit.id}
                    onClick={() => {
                      unit.active && setUnityChecked(unit);
                    }}
                    htmlFor="create-org"
                    className={`w-full flex-1 text-nowrap text-sm cursor-pointer ${
                      !unit.active && "opacity-40 cursor-default"
                    }`}
                  >
                    <input
                      type="radio"
                      id={unit.id.toString()}
                      name="mode-ingress"
                      className="hidden radio-unit"
                      disabled={!unit.active}
                      value={unit.id}
                    />
                    <div className="flex w-full justify-between items-center">
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">
                          {unit.name}
                        </span>
                        <span className=" text-sm text-zinc-400">
                          #{unit.id}
                        </span>
                      </div>
                      {unityChecked?.id === unit.id ? (
                        <CheckCircle size={20} className="text-primary" />
                      ) : unit.active ? (
                        <CircleDashed size={20} className="text-zinc-400" />
                      ) : (
                        <LockKeyhole size={20} className="text-zinc-400" />
                      )}
                    </div>
                  </label>
                </>
              ))}
            </div>
          </ScrollArea>
          <Button className="text-sm w-full mt-2">
            Continuar <ArrowRight />
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default SelectUnityModal;
