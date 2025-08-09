import { ButtonProps } from "@/interfaces";

const Pill: React.FC<ButtonProps> = ({ style }) => {
  return <button className="rounded-md">{style}</button>;
};

export default Pill;
