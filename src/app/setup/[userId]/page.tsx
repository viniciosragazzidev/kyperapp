"use client";
import Button from "@/components/Button";
import { Building2, Crown, HelpCircle } from "lucide-react";
import React from "react";
import FormUser from "./components/form-user";
import FormCompany from "./components/form-company";

const Setup = ({ params }: { params: { userId: string } }) => {
  const [step, setStep] = React.useState(1);
  return (
    <div className="flex w-full text-slate-200 py-8 gap-16 max-lg:pb-20">
      <div className="w-full max-w-xs flex flex-col gap-6 max-lg:hidden">
        <h1 className="text-xl font-semibold">Complete as informações:</h1>
        <Button disabled={step === 2}>
          <Crown size={20} /> Informações do Responsável
        </Button>
        <Button color="secondary" disabled={step === 1}>
          <Building2 size={20} /> Informações da Organização
        </Button>
      </div>
      <div className="  gap-6 fixed bottom-0 left-0 w-full justify-center items-center p-4 bg-black z-50 hidden max-lg:flex ">
        <Button disabled={step === 2}>
          <Crown size={20} /> Responsável
        </Button>
        <Button color="secondary" disabled={step === 1}>
          <Building2 size={20} /> Organização
        </Button>
      </div>
      {step === 1 ? (
        <FormUser step={step} setStep={setStep} />
      ) : (
        <FormCompany />
      )}
    </div>
  );
};

export default Setup;
