import MenuLateral from "./MenuLateral";

interface TituloProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: TituloProps) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
}
