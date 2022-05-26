import Botao from "../components/Botao";
import TabelaClientes from "../components/Tabela";
import Layout from "../components/template/Layout";
import Cliente from "../core/Cliente";

export default function Cadastro() {
  const clientes = [
    new Cliente("Suelio", 42, "1"),
    new Cliente("Claudiana", 44, "2"),
    new Cliente("Giovanna", 11, "3"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }
  return (
    <Layout titulo="Cadastro cliente" subtitulo="">
      <div className="flex justify-end">
        <Botao className="mb-4">Novo Cliente</Botao>
      </div>
      <TabelaClientes
        clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
      />
    </Layout>
  );
}
