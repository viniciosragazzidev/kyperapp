import React from "react";
import {
  CardInfo,
  CardInfoBody,
  CardInfoNotification,
  CardInfoNotificationAvatar,
  CardInfoTitle,
  CardInfoValue,
} from "../components/CardInfo";
import { Package } from "lucide-react";
import ServicesTable from "./components/ServicesTable/ServicesTable";

const Services = () => {
  return (
    <main className="w-full h-full text-slate-200 flex flex-col gap-8">
      <div className="px-4 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
        <CardInfo>
          <CardInfoBody>
            <CardInfoTitle>Serviços</CardInfoTitle>
            <CardInfoValue days={30}>18 Entradas</CardInfoValue>
          </CardInfoBody>

          <CardInfoNotification>
            <CardInfoNotificationAvatar url="https://avatars.githubusercontent.com/u/125518719?v=4" />
            <span className="flex gap-1 items-center">
              <span className="text-sm text-zinc-300 font-semibold">
                Samuel
              </span>
              <span className="text-xs w-full overflow-hidden text-ellipsis flex-1 text-nowrap text-zinc-400">
                adicionou uma nova ordem á 3 minutos.
              </span>
            </span>
          </CardInfoNotification>
        </CardInfo>
        <CardInfo>
          <CardInfoBody>
            <CardInfoTitle>Em aberto</CardInfoTitle>
            <CardInfoValue days={30}>08 Ordens</CardInfoValue>
          </CardInfoBody>

          <CardInfoNotification>
            <Package size={20} className="text-zinc-400" />
            <span className="flex gap-1 items-center">
              <span className="text-sm text-zinc-200 font-semibold">
                OS #58147
              </span>
              <span className="text-xs w-full overflow-hidden text-ellipsis flex-1 text-nowrap text-zinc-400">
                sem atualizações por muito tempo{" "}
              </span>
            </span>
          </CardInfoNotification>
        </CardInfo>
        <CardInfo>
          <CardInfoBody>
            <CardInfoTitle>Finalizados</CardInfoTitle>
            <CardInfoValue days={30}>10 Ordens</CardInfoValue>
          </CardInfoBody>

          <CardInfoNotification>
            <Package size={20} className="text-zinc-400" />
            <span className="flex gap-1 items-center">
              <span className="text-sm text-zinc-200 font-semibold">
                OS #55147
              </span>
              <span className="text-xs w-full overflow-hidden text-ellipsis flex-1 text-nowrap text-zinc-400">
                foi entregue á 20 minutos
              </span>
            </span>
          </CardInfoNotification>
        </CardInfo>
      </div>

      <ServicesTable />
    </main>
  );
};

export default Services;
