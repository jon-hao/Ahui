import { RouterContext } from "src/common";
import { NavWrapper } from "./Nav.style"
import React, { useContext } from "react";

const Nav: React.FC = () => {
  const { routes } = useContext(RouterContext);
  return (
    <NavWrapper>
      {routes.map((item, key) => <div key={key}>{item.name}</div>)}
    </NavWrapper>
  )
}

export default Nav;
