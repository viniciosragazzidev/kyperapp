import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(relativeTime);
dayjs.locale("pt-br");
// import { brStates, statusData } from "../constants";

export const formateDate = (date: Date) => {
  return dayjs().to(date);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
