import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import FormularioCLiente from "../components/FormularioCliente";
import TabelaClientes from "../components/Tabela";
import Layout from "../components/template/Layout";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import useClientes from "../hooks/useCliente";
import useCliente from "../hooks/useCliente";

export default function Cadastro() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecinarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <Layout titulo="Cadastro cliente" subtitulo="">
      {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao onClick={novoCliente} className="mb-4">
              Novo Cliente
            </Botao>
          </div>

          <TabelaClientes
            clientes={clientes}
            clienteSelecionado={selecinarCliente}
            clienteExcluido={excluirCliente}
          />
        </>
      ) : (
        <FormularioCLiente
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelar={exibirTabela}
        />
      )}
    </Layout>
  );
}
