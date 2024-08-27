import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errorMessage?: string;
  name: string;
  type?: string;
}

const Input = ({ register, errorMessage, name, type= 'text', ...rest }: InputProps) => {
  return (
    <div className="min-h-[70px]">
      <input
        type={type}
        {...register(name)}
        {...rest}
        className="bg-centerwhite w-full rounded border border-borderwhite p-2 outline-none text-semiblack "
      />
      {errorMessage && (
        <div className="mt-1 text-sm text-rose-600">{errorMessage}</div>
      )}
    </div>
  );
};
export default Input;
