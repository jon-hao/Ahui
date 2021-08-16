import React, { MouseEventHandler } from "react";
import { IconWrapper } from "./Icon.style";
import { ReactSVG } from "react-svg";

type TIconProps = {
  className?: string;
  icon: string;
  onClick?: MouseEventHandler;
};

const Icon: React.FC<TIconProps> = ({ className, icon, onClick }) => {
  return (
    <IconWrapper className={className} onClick={onClick}>
      <ReactSVG src={icon} />
    </IconWrapper>
  );
};

export default Icon;
