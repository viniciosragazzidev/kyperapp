"use client";
import {
  Headset,
  LayoutDashboard,
  PhoneCall,
  Settings,
  ShoppingCart,
  Wallet,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Sidebar = ({}: {}) => {
  const params = useParams();
  const pathname = usePathname();
  const urlBase = "/" + params.orgId + "/" + params.unityId;
  const itemsMenu = [
    {
      name: "Dashboard",
      href: `${urlBase}`,
      icon: LayoutDashboard,
      current: false,
    },

    {
      name: "Serviços",
      href: `${urlBase}/services`,
      icon: Wrench,
      current: false,
    },
    {
      name: "Vendas",
      href: `${urlBase}/sales`,
      icon: ShoppingCart,
      current: false,
    },
    {
      name: "Financeiro",
      href: `/${urlBase}/financial`,
      icon: Wallet,
      current: false,
    },
    {
      name: "Atendimentos",
      href: `/${urlBase}/atendimentos`,
      icon: Headset,
      current: false,
    },
  ];

  console.log(pathname === urlBase);
  // const handleChangeCurrentItemActive = (item: any) => {
  //   setItemsMenu(
  //     itemsMenu.map((i) => ({
  //       ...i,
  //       current: i.name === item.name,
  //     }))
  //   );
  // };
  // useEffect(() => {
  //   setItemsMenu(
  //     itemsMenu.map((i) => ({
  //       ...i,
  //       current: pathname === i.href,
  //     }))
  //   );
  // }, []);
  return (
    <div className="sidebar w-full sm:max-w-10 h-full  border-r border-zinc-900 py-4 max-sm:py-1 flex items-center max-sm:fixed max-sm:z-50 max-sm:backdrop-blur-md max-sm:h-min max-sm:bottom-0 sm:flex-col">
      <ul className="flex sm:flex-col justify-center items-center flex-1 gap-5 max-sm:gap-0">
        {itemsMenu.map((item) => (
          <li
            key={item.name}
            className="w-full h-10 flex items-center justify-center gap-2"
          >
            <Link
              href={item.href}
              className={`${
                pathname === item.href ||
                (pathname.includes(item.href) &&
                  item.href.length > urlBase.length)
                  ? "text-primary"
                  : "text-zinc-400"
              } w-full h-full flex items-center justify-center gap-2`}
            >
              <item.icon size={20} />
            </Link>
          </li>
        ))}
      </ul>

      <Link className="aa" href={`/${params.orgId}/${params.unityId}/settings`}>
        <Settings size={20} className="text-zinc-400" />
      </Link>
    </div>
  );
};

export default Sidebar;
