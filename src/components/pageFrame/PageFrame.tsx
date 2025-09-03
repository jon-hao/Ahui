import React, { useContext } from "react";
import { ContentWrapper, PageFrameWrapper, PageTitle } from "./PageFrame.style";
import Nav from "./components/nav/Nav"
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import Tools from "./components/tools/Tools";
import { RouterContext } from "@jon-hao/ahkite";

const PageFrame: React.FC = () => {
  const { route } = useContext(RouterContext);
  
  return (
    <PageFrameWrapper>
      <Nav />
      <ContentWrapper>
        <BreadCrumbs />
        <PageTitle>{route?.name ?? "Page Not Found"}</PageTitle>
        <Tools />
        {route?.component}
      </ContentWrapper>
    </PageFrameWrapper>
  )
}

export default PageFrame;
