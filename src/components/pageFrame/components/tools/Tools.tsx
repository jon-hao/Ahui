import React, { useContext } from "react";
import { AhKiteContext, Icon, Theme } from "@jon-hao/ahkite";
import { ToolsWrapper } from "./Tools.style";

const Tools: React.FC = () => {
  const { theme, setTheme } = useContext(AhKiteContext)
  return (
    <ToolsWrapper onClick={() => {
      setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    }}>
      <Icon iconName="darkMode" className={theme} />
    </ToolsWrapper>
  )
}

export default Tools;
