import React, { useContext } from "react";
import { AhKiteContext, Icon, IconName, Theme } from "src/common";
import { ToolsWrapper } from "./Tools.style";

const Tools: React.FC = () => {
  const { theme, setTheme } = useContext(AhKiteContext)
  return (
    <ToolsWrapper>
      <Icon iconName={IconName.DarkMode} onClick={() => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
      }} />
    </ToolsWrapper>
  )
}

export default Tools;
