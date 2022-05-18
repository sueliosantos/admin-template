interface AuthInputProps {
  label: string;
  valor: any;
  tipo?: "text" | "email" | "password";
  valorMudou: (novoValor: any) => void;
  obrigatorio?: boolean;
}

export default function AuthInput(props) {
  return (
    <div className={`flex flex-col mt-2`}>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
          px-4 py-3 rounded-lg 
          bg-gray-200 border 
          focus:border-blue-500
          focus:bg-white
          focus:outline-none
          `}
      />
    </div>
  );
}
