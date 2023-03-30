import { memo, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event?: MouseEvent) => void;
}

const Button = memo(({ children, onClick }: ButtonProps) => (
  <button onClick={() => onClick && onClick()} className="main-btn">
    <span> {children} </span>
  </button>
));

export default Button;
