import React, { useContext } from "react";
import { IconWrapper } from "./Icon.style";
import { AhKiteContext } from "src/common/contexts/AhKiteContext";

type TProps = {
  className?: string,
  iconName: string,
  onClick?: () => void
}

const Icon: React.FC<TProps> = ({ className, iconName, onClick }) => {
  const { icons } = useContext(AhKiteContext);
  return <IconWrapper className={className} src={icons?.[iconName] ?? 'default'} onClick={onClick} width={24} height={24} />
}

export default Icon;
