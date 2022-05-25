/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import router from "next/router";
import loading from "../../../public/imagens/looding.gif";
import useAuth from "../../data/hook/useAuth";

export default function ForcarAutenticacao(props) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return <>{props.children}</>;
  }

  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading}></Image>
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push("/autenticacao");
  }
}
