import { FC } from "react";

interface IButton {
  bg: string;
  title: string;
  btnIcon?: string;
  className?: string;
}
const Button: FC<IButton> = ({ title, btnIcon, className }) => {
  return (
    <button className={className}>
      <img src={`${btnIcon}`} alt="" />
      <span>{title}</span>
    </button>
  );
};

export default Button;
