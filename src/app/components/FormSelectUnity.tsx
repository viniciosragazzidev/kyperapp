"use client";
import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Store } from "lucide-react";
import React, { useState } from "react";
import SelectUnityModal from "./SelectUnityModal";
import { useRouter } from "next/navigation";

const FormSelectUnity = ({ organization }: any) => {
  const router = useRouter();
  const [openModalUnity, setOpenModalUnity] = useState(false);
  const [currentUnity, setCurrentUnity] = useState({
    id: null,
    name: null,
    active: null,
  });

  const handleEnterUnity = () => {
    if (currentUnity.id && organization.slug) {
      router.push(`/${organization.slug}/${currentUnity.id}`);
    }
  };
  return (
    <>
      <div className="w-full md:h-16 rounded-xl flex px-4 text-zinc-400 gap-5 pl-11 bg-zinc-950 max-md:p-4  items-center max-md:flex-col">
        <div className="w-full h-full  ">
          <div
            onClick={() => {
              setOpenModalUnity(true);
            }}
            className="w-full h-full cursor-pointer flex items-center  gap-2 max-md:h-11 max-md:pl-9 pl-1 max-w-[218px]"
          >
            <Store className="text-zinc-400 absolute left-10" size={20} />
            <span
              className={`w-full      max-w-60   cursor-pointer   mr-3  text-nowrap text-ellipsis overflow-hidden `}
            >
              {currentUnity.name ? currentUnity.name : "Selecionar Unidade"}
            </span>

            <ChevronDown size={20} className="text-zinc-400" />
          </div>
        </div>

        <div className="divide w-px h-6 bg-zinc-600 max-md:hidden "></div>

        <Button onClick={handleEnterUnity}>
          Acessar <ArrowRight />
        </Button>
      </div>

      <SelectUnityModal
        open={openModalUnity}
        onPress={() => setOpenModalUnity(false)}
        setCurrentUnity={setCurrentUnity}
      />
    </>
  );
};

export default FormSelectUnity;
