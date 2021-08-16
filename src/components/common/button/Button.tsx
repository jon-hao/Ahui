import React, { MouseEventHandler } from "react";
import { ButtonWrapper } from "./Button,style";

type TButtonProps = {
  className?: string;
  onClick?: MouseEventHandler;
};

const Button: React.FC<TButtonProps> = ({ className, onClick, children }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
