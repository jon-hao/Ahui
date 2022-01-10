import React from "react";
import "./Container.scss";

type TContainerProps = {
  className?: string;
  title?: any;
  absolute?: any;
};

const Container: React.FC<TContainerProps> = ({
  className = "",
  title,
  absolute,
  children,
}) => {
  return (
    <div className={`container ${className}`}>
      <div className="container-header">{title}</div>
      <div className="container-bodyer">{children}</div>
      <div className="container-absolute">{absolute}</div>
    </div>
  );
};

export default Container;
