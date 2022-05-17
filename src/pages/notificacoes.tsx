import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const dados = useAppData();

  return (
    <Layout titulo="Notificações" subtitulo="Teste Notificações">
      <button onClick={dados.alternarTema}>Click</button>
    </Layout>
  );
}
