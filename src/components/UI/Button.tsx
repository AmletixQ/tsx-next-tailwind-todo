import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
const Button: FC<IProps> = (props) => {
  return (
    <button
      {...props}
      className="border border-primary px-4 py-[3px] text-sm hover:bg-primary hover:text-white transition duration-200 cursor-pointer"
    />
  );
};

export default Button;
