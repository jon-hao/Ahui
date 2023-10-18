import React from "react";
import { TrendsWrapper } from "./Trends.style";
import TrendsSummary from "./trendsSummary/TrendsSummary";
import TrendsDetail from "./trendsDetail/TrendsDetail";

const Trends: React.FC = () => {
  return (
    <TrendsWrapper>
      <TrendsSummary />
      <TrendsDetail />
    </TrendsWrapper>
  )
}

export default Trends;
