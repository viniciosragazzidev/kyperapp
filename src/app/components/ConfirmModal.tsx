"use client";

import Button from "@/components/Button";
import Modal, { DescriptionModal, TitleModal } from "@/components/Modal";
import { ArrowRight, Building2, Check, Code, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const ConfirmModal = ({ open, onPress }: any) => {
  const [modeJoinOrg, setModeJoinOrg] = React.useState<boolean>(false);
  const navigate = useRouter();
  const confirmSending = (e: any) => {
    e.preventDefault();
    onPress();
  };

  useEffect(() => {
    if (!open) setModeJoinOrg(false);
  }, [open]);
  return (
    <>
      <Modal className="max-h-48" open={open} size="content" onPress={onPress}>
        <header>
          <TitleModal>Enviar as informações?</TitleModal>
          <DescriptionModal>
            Não se preocupe, isso é somente uma configuração inicial. Você
            depois poderá alterar ou adicionar novas informações se for
            nescessário.
          </DescriptionModal>
        </header>

        <div className="flex items-center w-full gap-10 justify-between">
          <Button color="secondary" className="text-sm">
            Cancelar
          </Button>
          <Button className="text-sm max-h-[34px]" onClick={confirmSending}>
            Confirmar <Check />
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
