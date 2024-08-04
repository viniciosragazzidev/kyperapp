"use client";

import React, { useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StatusItens } from "@/lib/constants";
import { StatusType } from "@/lib/types";
import { Check, CirclePlus, Search } from "lucide-react";
const TableServicesStatusPopover = ({
  selectedStatus,
  setSelectedStatus,
}: {
  selectedStatus: StatusType[] | null;
  setSelectedStatus: React.Dispatch<React.SetStateAction<StatusType[] | null>>;
}) => {
  const [open, setOpen] = React.useState(false);
  const addStatusList = (status: StatusType) => {
    if (selectedStatus) {
      if (selectedStatus.includes(status)) {
        setSelectedStatus(
          selectedStatus.filter((statusSelected) => statusSelected !== status)
        );
      } else {
        setSelectedStatus([...selectedStatus, status]);
      }
    } else {
      setSelectedStatus([status]);
    }
  };

  const [statusSearch, setStatusSearch] = React.useState<string>("");

  const filteredStatus = StatusItens.filter((status) => {
    return status.label.toLowerCase().includes(statusSearch.toLowerCase());
  });

  useEffect(() => {
    setTimeout(() => {
      if (!open) setStatusSearch("");
    }, 500);
  }, [open]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-max h-full  flex cursor-pointer items-center gap-2 max-md:h-11 border border-dashed border-zinc-700/80 rounded-full px-3 py-2 text-zinc-600">
          <CirclePlus size={16} />
          {selectedStatus && selectedStatus.length > 0 ? (
            <>
              <span className="text-sm text-zinc-200">Status:</span>{" "}
              {selectedStatus.map((status) => (
                <span
                  key={status.value}
                  className="text-sm px-2 text-zinc-200 bg-zinc-900 rounded-full"
                >
                  {status.label}
                </span>
              ))}
            </>
          ) : (
            <span className="text-sm text-zinc-200">Status</span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 bg-zinc-950 border text-slate-200 "
        side="bottom"
        align="center"
      >
        <div className="w-full h-full flex items-center gap-2  border-b border-zinc-700/80   px-3 py-3 text-zinc-600">
          <Search size={16} />
          <input
            type="email"
            placeholder="Buscar Status"
            onChange={(e) => setStatusSearch(e.target.value)}
            className={`w-full h-full bg-transparent  placeholder:text-zinc-600 outline-none text-sm placeholder:text-sm  focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all`}
          />
        </div>
        <ul>
          {filteredStatus.map((item) => (
            <li
              key={item.value}
              className="p-2 flex items-center hover:bg-zinc-900 cursor-pointer z-50 text-sm"
            >
              <input
                type="checkbox"
                name={item.value}
                checked={selectedStatus?.includes(item)}
                id={item.value}
                value={item.value}
                className="w-4 h-4 bg-transparent hidden"
              />
              <div
                key={item.value}
                onClick={() => addStatusList(item)}
                className="w-4 h-4 border border-zinc-800 rounded-sm flex justify-center items-center"
              >
                {selectedStatus?.includes(item) && (
                  <Check size={10} className="text-zinc-200" />
                )}
              </div>
              <label
                htmlFor={item.value}
                className="flex w-full cursor-pointer items-center gap-0 pl-2"
                onClick={() => addStatusList(item)}
              >
                <span className="text-zinc-600">
                  <item.icon size={14} />
                </span>
                <span className="ml-2">{item.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default TableServicesStatusPopover;
