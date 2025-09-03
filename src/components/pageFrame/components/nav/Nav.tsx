import { classnames, Icon, RouterContext } from "@jon-hao/ahkite";
import { Logo, NavWrapper, Navigate, Navigates } from "./Nav.style"
import React, { useContext } from "react";

const Nav: React.FC = () => {
  const { route, routes, navigate, state } = useContext(RouterContext);
  const { isCloseSidebar } = state
  const classNames = classnames({
    closed: isCloseSidebar
  })

  return (
    <NavWrapper className={classNames}>
      <Logo className={classNames} onClick={() => navigate({ state: { isCloseSidebar: !isCloseSidebar } })}>
        <Icon iconName="closeSidebar" />
        {!isCloseSidebar && <span>Close sidebar</span>}
      </Logo>
      <Navigates>
        {routes.map((item, key) => {
          const classNames = classnames({
            active: item.name === route?.name,
            closed: isCloseSidebar
          })
          return (
            <Navigate key={key} className={classNames} onClick={() => navigate(item.name)}>
              {item.icon}
              {!isCloseSidebar && <span>{item.name}</span>}
            </Navigate>
          )
        })}
      </Navigates>
    </NavWrapper>
  )
}

export default Nav;
