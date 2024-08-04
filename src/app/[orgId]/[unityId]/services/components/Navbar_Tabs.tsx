"use client";

import { Book, BookUser, ListVideo, Settings, Wallet } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const NavbarTabs = () => {
  const params = useParams();
  const pathname = usePathname();
  const urlBase = "/" + params.orgId + "/" + params.unityId + "/services";

  const menuItems = [
    {
      name: "Início",
      href: `${urlBase}`,
      icon: ListVideo,
      id: 1,
    },
    {
      name: "Clientes",
      href: `${urlBase}/clients`,
      icon: BookUser,
      id: 2,
    },
    {
      name: "Financeiro",
      href: `${urlBase}/financial`,
      icon: Wallet,
      id: 3,
    },
    {
      name: "Configurações",
      href: `${urlBase}/settings`,
      icon: Settings,
      id: 4,
    },
  ];

  console.log(pathname === urlBase);

  return (
    <ScrollArea className="max-sm:w-screen h-12 max-xs:h-14 whitespace-nowrap rounded-md px-4 ">
      <ul className="w-min flex items-center gap-2 text-slate-200">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`px-3 py-1.5 rounded-full cursor-pointer text-sm hover:opacity-95 group transition-all ${
              pathname === item.href
                ? "bg-zinc-800 font-medium"
                : "text-slate-200"
            }`}
          >
            <Link
              href={item.href}
              className="w-full flex items-center justify-start gap-2"
            >
              <item.icon
                size={20}
                className={`group-hover:translate-x-[2px] transition-transform  ${
                  pathname === item.href && "text-primary"
                }`}
              />
              <span className="group-hover:translate-x-[-2px] transition-transform ">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default NavbarTabs;
