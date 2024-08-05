"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ellipsis, Eye, ImageDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface TableServicesOptionsPopoverProps {
  idOs: string;
}
const TableServicesOptionsPopover = ({
  idOs,
}: TableServicesOptionsPopoverProps) => {
  const [open, setOpen] = React.useState(false);

  const navigate = useRouter();
  const pathname = usePathname();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <td className="text-zinc-600 text-sm font-medium px-2 w-min">
          <span className="border w-7 h-7 border-zinc-800 rounded-md cursor-pointer group active:scale-105 active:shadow-sm active:shadow-zinc-800 right-4 flex items-center justify-center">
            <Ellipsis
              className="text-zinc-400 group-hover:scale-95 transition-transform group-active:scale-90"
              size={16}
            />
          </span>
        </td>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <ul>
          <li
            onClick={() => navigate.push(`${pathname}/os?id=${idOs}`)}
            className="p-2 flex items-center hover:bg-zinc-900 cursor-pointer z-50 text-sm"
          >
            <p className="flex w-full cursor-pointer items-center gap-2 pl-2">
              <span className="text-zinc-600">
                <Eye size={16} />
              </span>
              <span> Visualizar OS</span>
            </p>
          </li>
          <li className="p-2 flex items-center hover:bg-zinc-900 cursor-pointer z-50 text-sm">
            <p className="flex w-full cursor-pointer items-center gap-2 pl-2">
              <span className="text-zinc-600">
                <ImageDown size={16} />
              </span>
              <span> Gerar Nota</span>
            </p>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default TableServicesOptionsPopover;
