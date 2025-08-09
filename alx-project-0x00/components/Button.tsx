import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ styles, children }) => {
  return <button className={`border px-4 py-2 ${styles}`}>{children}</button>;
};

export default Button;
