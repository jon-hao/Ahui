import { Theme } from "../../../constants/style";
import * as React from "react";
import ContainerWrapper from "./Container.style";

type TContainerProps = {
  className?: string;
  title?: any;
  absolute?: any;
  theme?: Theme;
};

const Container: React.FC<TContainerProps> = ({
  className = "",
  title,
  absolute,
  theme = Theme.Light,
  children,
}) => {
  return (
    <ContainerWrapper className={`container ${theme} ${className}`}>
      <div className="container-header">{title}</div>
      <div className="container-bodyer">{children}</div>
      <div className="container-absolute">{absolute}</div>
    </ContainerWrapper>
  );
};

export default Container;
