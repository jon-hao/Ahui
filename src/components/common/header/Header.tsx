import React, { useContext } from "react";
import { HeaderWrapper } from "./Header.style";
import { ThemeContext } from "../../context/ThemeContext";

type THeaderProps = {
  className?: string;
  title?: string;
};

const Header: React.FC<THeaderProps> = ({ className, title, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderWrapper className={className} theme={theme}>
      <div className="header-title">{title}</div>
      <div className="header-setting">{children}</div>
    </HeaderWrapper>
  );
};

export default Header;
