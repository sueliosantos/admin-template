import { createContext, useEffect, useState } from "react";

//type Tema = "dark" | "";

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({
  tema: null,
  alternarTema: null,
});

export function AppProvider(props) {
  const [tema, setTema] = useState("dark");

  function alternarTema() {
    const novoTema = tema === "" ? "dark" : "";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  }

  useEffect(() => {
    const valor = localStorage.getItem("tema");
    setTema(valor);
  }, []);

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
