import React from "react";
import { MarketWrapper } from "./Market.style";
import { useQuery } from "src/common";

const Market: React.FC = () => {
  const [_, { firstLoading }] = useQuery(marketSentiment);

  return (
    <MarketWrapper>
      Pujunhao
    </MarketWrapper>
  )
}

export default Market;