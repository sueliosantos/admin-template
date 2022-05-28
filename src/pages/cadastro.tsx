import { useState } from "react";
import Botao from "../components/Botao";
import FormularioCLiente from "../components/FormularioCliente";
import TabelaClientes from "../components/Tabela";
import Layout from "../components/template/Layout";
import Cliente from "../core/Cliente";

export default function Cadastro() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const clientes = [
    new Cliente("Suelio", 42, "1"),
    new Cliente("Claudiana", 44, "2"),
    new Cliente("Giovanna", 11, "3"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }
  return (
    <Layout titulo="Cadastro cliente" subtitulo="">
      {visivel === "tabela" ? (
        <>
          <div className="flex justify-end">
            <Botao onClick={novoCliente} className="mb-4">
              Novo Cliente
            </Botao>
          </div>

          <TabelaClientes
            clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
        </>
      ) : (
        <FormularioCLiente
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelar={() => setVisivel("tabela")}
        />
      )}
    </Layout>
  );
}
