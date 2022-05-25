import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Conteudo from "./Conteudo";
import useAppData from "../../data/hook/useAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    <ForcarAutenticacao>
      <div
        className={`
      flex
      h-screen
      w-screen
      ${tema}
      `}
      >
        <MenuLateral />
        <div
          className={` flex 
        flex-col
        w-full
        p-7
       dark:bg-gray-800
        `}
        >
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}
