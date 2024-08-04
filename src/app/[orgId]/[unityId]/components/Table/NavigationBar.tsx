"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NavigationBar = ({ itemsLength }: { itemsLength: number }) => {
  const [currentPerPage, setCurrentPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const perPages = [5, 10, 20, 30];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(itemsLength / currentPerPage);

  const navigate = useRouter();

  const navigateToFunction = (page: number) => {
    navigate.push(`?page=${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="w-full  flex items-center justify-between">
      <span className="text-sm text-zinc-500">
        Mostrando <span>{currentPerPage}</span> de <span>{itemsLength}</span>{" "}
        itens
      </span>
      <div className="flex gap-5  ">
        <div className="flex items-center gap-1">
          <span className="text-sm text-zinc-500 max-sm:hidden">
            Itens por página
          </span>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 h-8 data-[state=open]:"
              >
                {currentPerPage}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-24 p-0 " side="top" align="center">
              {perPages.map((perPage) => (
                <div
                  key={perPage}
                  className={`w-full flex justify-between px-2 py-1 cursor-pointer hover:bg-zinc-900 ${
                    perPage === currentPerPage && "border border-zinc-900/50"
                  }`}
                  onClick={() => {
                    setCurrentPerPage(perPage);
                    setOpen(false);
                  }}
                >
                  <span className="w-full text-sm">{perPage}</span>
                  {perPage === currentPerPage ? (
                    <Check className="h-4 w-4" />
                  ) : null}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 max-sm:hidden">Página</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateToFunction(1)}
              disabled={currentPage === 1}
              className={` disabled:opacity-50 disabled:cursor-not-allowed  p-1 text-xs text-zinc-200 bg-zinc-900 rounded-lg cursor-pointer hover:bg-opacity-85 active:scale-95 transition-all`}
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigateToFunction(currentPage - 1)}
              disabled={currentPage === 1}
              className={` disabled:opacity-50 disabled:cursor-not-allowed  p-1 text-xs text-zinc-200 bg-zinc-900 rounded-lg cursor-pointer hover:bg-opacity-85 active:scale-95 transition-all`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
          <span>{currentPage}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateToFunction(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={` disabled:opacity-50 disabled:cursor-not-allowed  p-1 text-xs text-zinc-200 bg-zinc-900 rounded-lg cursor-pointer hover:bg-opacity-85 active:scale-95 transition-all`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigateToFunction(totalPages)}
              disabled={currentPage === totalPages}
              className={` disabled:opacity-50 disabled:cursor-not-allowed  p-1 text-xs text-zinc-200 bg-zinc-900 rounded-lg cursor-pointer hover:bg-opacity-85 active:scale-95 transition-all`}
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
