import React from "react";
import { ContentWrapper, PageFrameWrapper, PageTitle } from "./PageFrame.style";
import Nav from "./components/nav/Nav"
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import Tools from "./components/tools/Tools";

const PageFrame: React.FC<any> = ({ children }) => {
  return (
    <PageFrameWrapper>
      <Nav />
      <ContentWrapper>
        <BreadCrumbs />
        <PageTitle>PageTitle</PageTitle>
        <Tools />
        {children}
      </ContentWrapper>
    </PageFrameWrapper>
  )
}

export default PageFrame;
