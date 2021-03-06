import { IconeAjustes, IconeCasa, IconeNews, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {
  const { logout } = useAuth();
  return (
    <aside
      className={`flex flex-col dark:
     bg-gray-900 dark:text-gray-200`}
    >
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r
          bg-indigo-500
          to-purple-800
          h-20
          w-20

        `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
        <MenuItem url="/cadastro" texto="Cadastro" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNews} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={logout}
          className={`
            text-red-600
            hover:bg-red-400 hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}
