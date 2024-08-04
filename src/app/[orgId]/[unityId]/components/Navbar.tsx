"use client";

import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import {
  BriefcaseBusiness,
  ChevronDown,
  Menu,
  Settings,
  Settings2,
} from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";
import SelectUnityModal from "@/app/components/SelectUnityModal";
import { useRouter } from "next/navigation";
const Navbar = ({ params }: { params: { orgId: string; unityId: string } }) => {
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

  const units = [
    { id: "ab1019e7d4a1", name: "Unidade Central", active: true },
    { id: "ab1019e7d4a2", name: "Unidade São José do Rio Preto", active: true },
    { id: "ab1019e7d4a3", name: "Unidade Campinas", active: false },
    { id: "ab1019e7d4a4", name: "Unidade Ribeirão Preto", active: false },
    { id: "ab1019e7d4a5", name: "Unidade Bauru", active: false },
  ];

  const currentUnit = units.find((u) => u.id === params.unityId);

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
      <nav className="flex  items-center gap-5 w-full pt-10 max-sm:pt-5 pb-7 max-sm:pb-4  px-4 border-b border-zinc-800">
        <div className="mr-auto ">
          <Logo mode="complete" className="text-3xl max-xs:hidden" />
          <Logo mode="simple" className="text-3xl     hidden max-xs:block " />
        </div>
        <div className="divide w-px h-6 bg-zinc-600 max-md:hidden "></div>
        <span className="text-zinc-400 w-full flex flex-1 items-center gap-2 max-md:hidden ">
          <BriefcaseBusiness size={20} />
          {organization.name}
        </span>

        <Button
          onClick={() => setOpenModalUnity(true)}
          className="text-sm max-w-72 max-md:max-w-60 text-nowrap max-md:ml-auto hidden-screen-min"
          color="secondary"
        >
          <span className="max-md:max-w-40 text-ellipsis overflow-hidden ">
            {currentUnit?.name}
          </span>{" "}
          <Settings2 size={20} />
        </Button>
        <div className="flex gap-3 items-center cursor-pointer max-md:hidden">
          <div className="flex flex-col">
            <span className="text-zinc-200 text-sm font-medium">
              {user.name}
            </span>{" "}
            <span className="text-zinc-400 text-xs">{user.email}</span>
          </div>
          <div className="w-8 h-8 rounded-full relative overflow-hidden">
            <Image src={user.image_url} alt="user image" fill />
          </div>
          <span className="text-zinc-400 text-sm">
            <ChevronDown size={20} />
          </span>
        </div>

        <span className="hidden max-md:block ">
          <Menu size={20} className="text-zinc-400" />
        </span>
      </nav>

      <SelectUnityModal
        open={openModalUnity}
        onPress={() => setOpenModalUnity(false)}
        setCurrentUnity={setCurrentUnity}
        navigateTo={organization.slug}
      />
    </>
  );
};

export default Navbar;
