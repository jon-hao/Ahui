import React from "react";
import { SecuritiesContent, SecuritiesTitle, SecuritiesWrapper } from "./Securities.style";
import Stock from "src/components/stock/Stock";
import { StockChartType } from "src/components/stock/models/constants";

const securitiesCodes = ["000001", "000002"];

const Securities: React.FC = () => {
  return (
    <SecuritiesWrapper>
      <SecuritiesTitle>Securities</SecuritiesTitle>
      <SecuritiesContent>
        {securitiesCodes.map((code, key) => <Stock key={key} code={code} type={StockChartType.Candle} />)}
      </SecuritiesContent>
    </SecuritiesWrapper>
  )
}

export default Securities;