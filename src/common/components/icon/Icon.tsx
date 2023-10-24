import React from "react";
import { IconName } from "../../constants/IconEnum";
import { ReactSVG } from 'react-svg'
import DarkMode from "../../assets/icons/dark-mode.svg";

const icons = {
  [IconName.DarkMode]: DarkMode
}

type TProps = {
  iconName: IconName,
  onClick: () => void
}

const Icon: React.FC<TProps> = ({ iconName, onClick }) => {
  return <ReactSVG src={icons[iconName]} onClick={onClick} />
}

export default Icon;
