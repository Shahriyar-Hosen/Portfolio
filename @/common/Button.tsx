import { memo, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  link?: string;
  onClick?: (event?: MouseEvent) => void;
}

const Button = memo(({ children, onClick, link }: ButtonProps) => (
  <button onClick={() => onClick && onClick()} className="main-btn">
    <span> {children} </span>
  </button>
));

export default Button;
