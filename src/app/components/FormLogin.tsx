import Button from "@/components/Button";
import {
  ArrowRight,
  BriefcaseBusiness,
  RectangleEllipsis,
  Settings2,
  User,
} from "lucide-react";
import React from "react";

const FormLogin = ({
  user,
  setOpenModalModeIngress,
}: {
  user: any;
  setOpenModalModeIngress: (value: boolean) => void;
}) => {
  return (
    <form className="w-full md:h-16 rounded-xl flex px-4 text-zinc-400 gap-5 bg-zinc-900 max-md:p-4 items-center max-md:flex-col">
      <div className="w-full h-full flex items-center gap-2 max-md:h-11">
        <User />
        <input
          type="email"
          placeholder="Seu Email"
          disabled={user.name.length > 0}
          defaultValue={user.name}
          className={`w-full h-full bg-transparent  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all`}
        />
      </div>
      {user.name.length > 0 ? (
        <div className="w-full h-full flex items-center gap-2 max-md:h-11">
          <BriefcaseBusiness />
          <input
            type="email"
            placeholder="Seu Email"
            disabled
            defaultValue={
              user.organization ? user.organization : "Sem organização"
            }
            className={`w-full h-full bg-transparent  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all`}
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center gap-2 max-md:h-11">
          <RectangleEllipsis />
          <input
            type="password"
            placeholder="Sua Senha"
            className={`w-full h-full bg-transparent  placeholder:text-zinc-400 outline-none focus:placeholder:opacity-0 focus:placeholder:-translate-y-2   placeholder:transition-all`}
          />
        </div>
      )}
      <div className="divide w-px h-6 bg-zinc-600 max-md:hidden "></div>
      {user.name.length > 0 ? (
        <Button
          type="button"
          onClick={() =>
            user.organization.length === 0 && setOpenModalModeIngress(true)
          }
          disabled={user.organization.length > 0}
          className="w-full"
          size="full"
          color="secondary"
        >
          Configurar Empresa <Settings2 size={20} />
        </Button>
      ) : (
        <Button>
          Continuar <ArrowRight />
        </Button>
      )}
      {/* <button className="flex items-center gap-2 text-primary-foreground bg-primary border-none px-5 py-2 rounded-lg font-medium hover:scale-[.99] hover:opacity-85 transition-all max-md:w-full justify-center ">
  </button> */}
    </form>
  );
};

export default FormLogin;
