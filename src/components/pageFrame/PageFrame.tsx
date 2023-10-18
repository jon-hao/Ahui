import React from "react";
import { ContentWrapper, NavWrapper, PageFrameWrapper } from "./PageFrame.style";
import Nav from "../nav/Nav"

const PageFrame: React.FC<any> = ({ children }) => {
  return (
    <PageFrameWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageFrameWrapper>
  )
}

export default PageFrame;
