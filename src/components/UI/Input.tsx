import { InputHTMLAttributes, FC } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<IProps> = (props) => {
  return (
    <input
      {...props}
      className="border border-primary px-[15px] placeholder:text-sm w-full placeholder:text-slate-400"
    />
  );
};

export default Input;
