import { RouterContext } from "@jon-hao/ahkite";
import { Logo, NavWrapper, Navigate, Navigates } from "./Nav.style"
import React, { useContext } from "react";

const Nav: React.FC = () => {
  const { route, routes, navigate } = useContext(RouterContext);

  return (
    <NavWrapper>
      <Logo>Capitalism</Logo>
      <Navigates>
        {routes.map((item, key) => (
          <Navigate key={key} className={item.name === route?.name ? "active" : ""} onClick={() => navigate(item.name)}>
            {item.icon}
            {item.name}
          </Navigate>
        ))}
      </Navigates>
    </NavWrapper>
  )
}

export default Nav;
