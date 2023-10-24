import React from "react";
import { TrendsWrapper } from "./Trends.style";
import TrendsDetail from "./trendsDetail/TrendsDetail";

const Trends: React.FC = () => {
  return (
    <TrendsWrapper>
      <TrendsDetail />
    </TrendsWrapper>
  )
}

export default Trends;
