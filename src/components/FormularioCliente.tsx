import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import FormularioEntradaCliente from "./FormularioEntradaCliente";

interface FormularioClienteProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelar?: () => void;
}

export default function FormularioCLiente(props: FormularioClienteProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <FormularioEntradaCliente
          somenteLeitura
          texto="Nome"
          valor={id}
          className="mb-4"
        />
      ) : (
        false
      )}
      <FormularioEntradaCliente
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <FormularioEntradaCliente
        texto="Idade"
        valor={idade}
        tipo="number"
        valorMudou={setIdade}
      />
      <div className="mt-7 flex justify-end">
        <Botao
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          className="mr-2"
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>

        <Botao
          onClick={props.cancelar}
          className="bg-gradient-to-r from-gray-400 to-gray-700"
        >
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
