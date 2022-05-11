import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Conteudo from "./Conteudo";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      dark
      flex
      h-screen
      w-screen
    `}
    >
      <MenuLateral />
      <div
        className={` flex 
        flex-col
        w-full
        p-7
       dark:bg-green-50
        
        `}
      >
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
