import React, { ReactElement } from "react";
import { IconWrapper } from "./Icon.style";
import { ReactSVG } from "react-svg";

type TIconProps = {
  className?: string;
  icon: string;
};

const Icon: React.FC<TIconProps> = ({ className, icon }) => {
  return (
    <IconWrapper className={className}>
      <ReactSVG src={icon} />
    </IconWrapper>
  );
};

export default Icon;
