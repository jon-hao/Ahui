import React from "react";
import { MarketWrapper } from "./Market.style";
import { useQuery } from "src/common";
import getConfig, { Domain } from "src/config";

const Market: React.FC = () => {
  const { marketSentiment } = getConfig(Domain.Data)
  const [data, { loading }] = useQuery(marketSentiment);

  return (
    <MarketWrapper>
      {data ? data.currentFearGreed.score : 'pujunhao'}
    </MarketWrapper>
  )
}

export default Market;