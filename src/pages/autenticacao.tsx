/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeWorn } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle } = useAuth();

  const [erro, setErro] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  async function submeter() {
    try {
      if (modo === "login") {
        await login(email, senha);
      } else {
        await cadastrar(email, senha);
      }
    } catch (e) {
      exibirErros(e?.message ?? "Erro desconhecido!");
    }
  }

  function exibirErros(msg, tempoExibicao = 5) {
    setErro(msg);
    setTimeout(() => {
      setErro(null);
    }, tempoExibicao * 1000);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2">
        <img
          src="http://revistaocomercio.com.br/wp-content/uploads/2017/10/cartola-fc-785x400.jpg"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2">
        <h1
          className={`
          text-3xl font-bold mb-5
        `}
        >
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {erro ? (
          <div
            className={`
            bg-red-400
            text-white
            py-3
            px-5
            my-2
            border border-red-700 rounded-lg
            flex items-center
          `}
          >
            {IconeWorn(6)}
            <span className="ml-3">{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          valor={email}
          valorMudou={setEmail}
          tipo={"email"}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          tipo={"password"}
          obrigatorio
        />
        <button
          onClick={submeter}
          className={`
          w-full
          bg-indigo-500
          hover:bg-indigo-400
          text-white
          rounded-lg
          px-4
          py-3
          mt-6

        `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar usuário"}
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          onClick={loginGoogle}
          className={`
          w-full
          bg-red-500
          hover:bg-red-400
          text-white
          rounded-lg
          px-4
          py-3
        `}
        >
          Entrar com Google
        </button>
        <div>
          {modo === "login" ? (
            <p className="mt-8">
              Criar uma conta?
              <a
                onClick={() => setModo("cadastro")}
                className={`
              text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}
              >
                {" "}
                Crie uma conta gratuitamente
              </a>
            </p>
          ) : (
            <p className="mt-8">
              Já faz parte da comunidade?
              <a
                onClick={() => setModo("login")}
                className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
          `}
              >
                {" "}
                Entre com suas credenciais
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
