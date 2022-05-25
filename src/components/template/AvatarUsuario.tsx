/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

export default function AvatarUsuario() {
  const { usuario } = useAuth();
  return (
    <Link href={"/perfil"}>
      <img
        src={usuario?.imagemUrl ?? "/imagens/image.svg"}
        alt="Avatar do usuário"
        className={`h-10 w-10  rounded-t-full cursor-pointer ml-3`}
      />
    </Link>
  );
}
