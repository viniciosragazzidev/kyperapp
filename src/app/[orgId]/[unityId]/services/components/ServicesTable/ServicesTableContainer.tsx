"use client";

import React, { useState } from "react";
import { FileDown, FilePlus, Search } from "lucide-react";
import { toast } from "sonner";

import Button from "@/components/Button";
import TableServices, { ServicesTableType } from "./table-services";
import TableServicesStatusPopover from "./table-services-status-popover";
import NavigationBar from "../../../components/Table/NavigationBar";
import { servicesRoot } from "@/lib/constants";
import { StatusType } from "@/lib/types";
import { useParams, usePathname, useRouter } from "next/navigation";

const ServicesTableContainer = () => {
  // Estados para armazenar os filtros e paginação
  const [selectedStatus, setSelectedStatus] = useState<StatusType[] | null>(
    null
  );
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [currentPerPage, setCurrentPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedRowTable, setCheckedRowTable] = useState<number[]>([]);

  const params = useParams();
  const unityId = params.unityId;

  const servicesByUnity = servicesRoot.filter((service) => {
    return service.unityId === unityId;
  });

  // Função para filtrar os serviços com base na pesquisa
  const servicesFilteredBySearch = servicesByUnity.filter((service) => {
    if (currentSearch) {
      return (
        service.os.toLowerCase().includes(currentSearch.toLowerCase()) ||
        service.client[0].name
          .toLowerCase()
          .includes(currentSearch.toLowerCase()) ||
        service.items.every((item) =>
          item.name.toLowerCase().includes(currentSearch.toLowerCase())
        )
      );
    }
    return true;
  });

  // Função para filtrar os serviços com base no status selecionado
  const servicesFilteredByStatus = servicesFilteredBySearch.filter(
    (service) => {
      if (selectedStatus) {
        if (selectedStatus.length > 0) {
          return selectedStatus.some(
            (status) => status.value === service.status.value
          );
        }
        return true;
      }
      return true;
    }
  );

  // Função para paginar os serviços filtrados
  const servicesFilteredByPageAndItemsPerPage = servicesFilteredByStatus.slice(
    (currentPage - 1) * currentPerPage,
    (currentPage - 1) * currentPerPage + currentPerPage
  );

  const services = servicesFilteredByPageAndItemsPerPage;

  // Função para exportar itens da tabela
  const handleExportItemsTable = () => {
    if (checkedRowTable.length > 0) {
      toast.success(`${checkedRowTable.length} itens exportados para o excel`);
    } else {
      toast.error("Nenhum item selecionado");
    }
  };

  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className="w-full px-4 overflow-hidden relative flex flex-col gap-5">
      {/* Cabeçalho */}
      <header className="w-full flex justify-between items-center">
        <h1 className="text-zinc-200 text-lg font-semibold mr-auto block w-full">
          Lista de OS
        </h1>
        <Button
          onClick={() => {
            navigate.push(`${pathname}/os`);
          }}
          className="flex-1"
        >
          <FilePlus size={14} />
        </Button>
      </header>

      {/* Barra de pesquisa e filtros */}
      <div className="flex w-full gap-2 justify-between items-center max-xs:flex-col max-xs:items-start">
        <div className="flex gap-2 w-full items-center">
          <div className="w-full h-full max-w-60 flex items-center gap-2 max-md:h-11 border border-dashed border-zinc-700/80 rounded-full px-3 py-2 text-zinc-600">
            <Search size={16} />
            <input
              type="email"
              placeholder="Buscar OS"
              value={currentSearch}
              onChange={(e) => setCurrentSearch(e.target.value)}
              className="w-full h-full bg-transparent placeholder:text-zinc-600 outline-none text-sm placeholder:text-sm focus:placeholder:opacity-0 focus:placeholder:-translate-y-2 placeholder:transition-all"
            />
          </div>
          <TableServicesStatusPopover
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
          />
        </div>
        <Button
          onClick={handleExportItemsTable}
          className="max-w-28"
          size="sm"
          color="secondary"
        >
          <FileDown size={14} />
          Exportar
        </Button>
      </div>

      {/* Tabela de Serviços */}
      <TableServices
        checkedRowTable={checkedRowTable}
        setCheckedRowTable={setCheckedRowTable}
        services={services}
      />

      {/* Barra de Navegação */}
      <NavigationBar
        currentPerPage={currentPerPage}
        setCurrentPerPage={setCurrentPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsLength={servicesFilteredByStatus.length}
      />
    </div>
  );
};

export default ServicesTableContainer;
