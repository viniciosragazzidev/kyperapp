import React from "react";
import {
  CardInfo,
  CardInfoBody,
  CardInfoNotification,
  CardInfoNotificationAvatar,
  CardInfoTitle,
  CardInfoValue,
} from "./components/CardInfo";

const AppPage = () => {
  return (
    <div className="w-full h-full text-slate-200">
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
            <CardInfoTitle>Vendas</CardInfoTitle>
            <CardInfoValue days={30}>22 Concluídas</CardInfoValue>
          </CardInfoBody>

          <CardInfoNotification>
            <CardInfoNotificationAvatar url="https://avatars.githubusercontent.com/u/125518719?v=4" />
            <span className="flex gap-1 items-center">
              <span className="text-sm text-zinc-300 font-semibold">
                Vinicios
              </span>
              <span className="text-xs w-full overflow-hidden text-ellipsis flex-1 text-nowrap text-zinc-400">
                vendeu um Teclado Yamaha á 10 minutos
              </span>
            </span>
          </CardInfoNotification>
        </CardInfo>
        <CardInfo>
          <CardInfoBody>
            <CardInfoTitle>Caixa</CardInfoTitle>
            <CardInfoValue days={30}>R$ 430.75</CardInfoValue>
          </CardInfoBody>

          <CardInfoNotification>
            <CardInfoNotificationAvatar url="https://avatars.githubusercontent.com/u/125518719?v=4" />
            <span className="flex gap-1 items-center">
              <span className="text-sm text-zinc-300 font-semibold">
                Samuel
              </span>
              <span className="text-xs w-full overflow-hidden text-ellipsis flex-1 text-nowrap text-zinc-400">
                adicionou Pagamento Light{" "}
                <span className="text-red-600">(R$ -120.75)</span>
              </span>
            </span>
          </CardInfoNotification>
        </CardInfo>
      </div>
    </div>
  );
};

export default AppPage;
