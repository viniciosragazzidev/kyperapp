"use client";
import { Logo } from "@/components/Logo";
import RegisterModal from "./components/RegisterModal";
import SelectModeIngressModal from "./components/SelectModeIngressModal";
import React from "react";
import FormLogin from "./components/FormLogin";
import FormSelectUnity from "./components/FormSelectUnity";

export default function Home() {
  // const user = {
  //   name: "",
  //   email: "",
  //   organization: "",
  //   organization_id: "",
  //   image_url: "",
  // };

  // const organization = {
  //   name: "",
  //   id: "",
  //   slug: "",
  // };

  const user = {
    name: "Vinicios Ragazzi",
    email: "JHkKv@example.com",
    organization: "Kyper Agência",
    organization_id: "839524bea57",
    image_url: "https://avatars.githubusercontent.com/u/125518719?v=4",
  };

  const organization = {
    name: "Kyper Agência",
    id: "839524bea57",
    slug: "kyper-agencia",
  };
  const [openModalModeIngress, setOpenModalModeIngress] = React.useState(false);
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div className="w-screen  max-w-3xl  flex flex-col justify-center items-center gap-10 relative px-5">
          <div className="header flex flex-col justify-center items-center gap-2">
            <Logo mode="complete" />
            <p className="text-zinc-300 text-center">
              Organize e gerencie sua empresa de forma simples!
            </p>
          </div>
          <div className="content w-full flex flex-col gap-3 max-md:gap-1 max-md:items-center items-end rounded-xl  max-md:py-2 max-md:border border-zinc-900">
            <FormLogin
              user={user}
              setOpenModalModeIngress={setOpenModalModeIngress}
            />
            {user.organization && (
              <>
                <div className="hidden max-md:flex w-full">
                  <div className="w-full divide h-px mx-4 px-4 bg-zinc-600/50 "></div>
                </div>
              </>
            )}
            {user.organization && (
              <>
                <FormSelectUnity organization={organization} />
              </>
            )}
            {user.name.length === 0 && <RegisterModal />}
          </div>
          <span className="text-zinc-400 text-sm text-center md:px-24">
            Ao acessar o ecossistema Ignix, você automáticamente concorda com
            nossos{" "}
            <span className="text-zinc-200 underline">termos de uso</span> e{" "}
            <span className="text-zinc-200 underline">
              políticas de privacidade
            </span>
            .
          </span>
        </div>
      </main>
      <SelectModeIngressModal
        open={openModalModeIngress}
        onPress={() => setOpenModalModeIngress(false)}
      />
    </>
  );
}
