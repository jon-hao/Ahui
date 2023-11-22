import React from "react";
import { StockWrapper } from "./Stock.style";
import Candle from "src/components/candle/Candle";
import { StockChartType } from "./models/constants";

type TProps = {
  type: StockChartType;
  code: string;
}

const Stock: React.FC<TProps> = ({ type, code }) => {

  return (
    <StockWrapper>
      {type === StockChartType.Real && <div>Real</div>}
      {type === StockChartType.Candle && <Candle code={code} />}
    </StockWrapper>
  )
}

export default Stock;