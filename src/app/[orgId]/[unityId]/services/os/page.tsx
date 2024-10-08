"use client";

import Button from "@/components/Button";
import { servicesRoot } from "@/lib/constants";
import { Crown, Newspaper } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import FormClientOS from "./components/form-client-os";
import FormInfoOs from "./components/form-info-os";
import { ServicesTableType } from "../components/ServicesTable/table-services";

const PageOS = () => {
  const params = useSearchParams();

  const idOs = params.get("id");

  const os =
    servicesRoot.find((service) => service.id.toString() === idOs) || null;

  const [currentStep, setCurrentStep] = React.useState(0);
  const [newOs, setNewOS] = React.useState<ServicesTableType | null>(null);
  return (
    <main className="w-full h-min flex relative gap-10 md:gap-16 max-h-[calc(100vh-10rem)] max-lg:flex-col px-4">
      <div className="flex w-full h-full   lg:max-w-80 max-lg:w-full max-lg:h-min  flex-col gap-6 max-lg:justify-center max-lg:items-center max-lg:text-center ">
        <h3 className="font-semibold text-xl text-zinc-200 max-lg:hidden">
          {os ? `OS #${os.os}` : "Adicione uma nova OS:"}
        </h3>

        <div className="flex flex-col gap-6 w-full max-lg:flex-row max-lg:justify-center max-w-sm max-md:p-4 max-md:bg-zinc-950 max-md:border max-md:border-zinc-900/40 rounded-md">
          <Button
            size="full"
            onClick={() => {
              setCurrentStep(0);
            }}
            color={currentStep === 0 ? "primary" : "secondary"}
          >
            <Crown size={20} />{" "}
            <span className="hidden sm:block">Informações do Cliente</span>{" "}
            <span className="block sm:hidden">Cliente</span>
          </Button>

          <Button
            size="full"
            onClick={() => {
              setCurrentStep(1);
            }}
            color={currentStep === 1 ? "primary" : "secondary"}
          >
            <Newspaper size={20} />
            <span className="hidden sm:block">Informações da OS</span>{" "}
            <span className="block sm:hidden">Ordem de Serviço</span>
          </Button>
        </div>
      </div>
      <section className="flex w-full h-full flex-1  pb-24">
        {currentStep === 0 ? (
          <FormClientOS
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            newOs={newOs}
            setNewOs={setNewOS}
            os={os}
          />
        ) : (
          <FormInfoOs
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            newOs={newOs}
            setNewOs={setNewOS}
            os={os}
          />
        )}
      </section>
    </main>
  );
};

export default PageOS;
