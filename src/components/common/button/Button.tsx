import React, { MouseEventHandler, useContext } from "react";
import { ThemeContext } from "../../..";
import { ButtonWrapper } from "./Button.style";

type TButtonProps = {
  className?: string;
  onClick?: MouseEventHandler;
};

const Button: React.FC<TButtonProps> = ({ className, onClick, children }) => {
  const { colorMap } = useContext(ThemeContext);

  return (
    <ButtonWrapper {...colorMap} className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
