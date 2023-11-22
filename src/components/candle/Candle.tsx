import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CandleWrapper } from "./Candle.style";
import Candlestick from "./components/Candlestick";
import { useQuery } from "src/common";
import getConfig, { Domain } from "src/config";
import { adaptCandle } from "./models/adaptData";
import { CandlePeriod } from "./models/constants";
import { useState } from "react";

const rawData = [
  {
    high: 7.18811,
    low: 7.18127,
    open: 7.18631,
    close: 7.183,
    ts: 1562790720,
  },
  {
    high: 7.21184,
    low: 7.20139,
    open: 7.20139,
    close: 7.21138,
    ts: 1562790780,
  },
  {
    high: 7.21808,
    low: 7.21524,
    open: 7.2168,
    close: 7.21675,
    ts: 1562790840,
  },
  {
    high: 7.19661,
    low: 7.19343,
    open: 7.19633,
    close: 7.1936,
    ts: 1562790900,
  },
  {
    high: 7.18131,
    low: 7.17473,
    open: 7.17819,
    close: 7.18131,
    ts: 1562790960,
  },
  {
    high: 7.17874,
    low: 7.17475,
    open: 7.17874,
    close: 7.17604,
    ts: 1562791020,
  },
  {
    high: 7.19077,
    low: 7.18493,
    open: 7.18684,
    close: 7.19077,
    ts: 1562791080,
  },
  {
    high: 7.1837,
    low: 7.17899,
    open: 7.1792,
    close: 7.18246,
    ts: 1562791140,
  },
  {
    high: 7.18788,
    low: 7.18098,
    open: 7.18338,
    close: 7.18788,
    ts: 1562791200,
  },
  {
    high: 7.20103,
    low: 7.19715,
    open: 7.19778,
    close: 7.19715,
    ts: 1562791260,
  },
  {
    high: 7.21353,
    low: 7.20752,
    open: 7.20873,
    close: 7.21116,
    ts: 1562791320,
  },
];

type TProps = {
  market?: string;
  code: string;
}

const Candle: React.FC<TProps> = ({ code }) => {
  const { stockCandle } = getConfig(Domain.Economy)
  const [candlePeriod, setCandlePeriod] = useState<CandlePeriod>(CandlePeriod.Monthly);
  const [_, { firstLoading }] = useQuery(stockCandle, {
    query: {
      code,
      candlePeriod
    }
  });
  const data = adaptCandle(rawData);
  data.reduce((acc, item) => console.log(item), 0);
  const minValue = data.reduce(
    (minValue, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    },
    null,
  );
  const maxValue = data.reduce(
    (maxValue, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    },
    minValue,
  );

  return (
    <CandleWrapper className={firstLoading ? "loading" : ""}>
      {!firstLoading && (
        <ResponsiveContainer className="candle-chart-wrapper">
          <BarChart data={data} margin={{left: 20, right: 20, top: 20, bottom: 20}} >
            <XAxis dataKey="ts" />
            <YAxis domain={[minValue, maxValue]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="openClose"
              fill="#8884d8"
              shape={<Candlestick />}
            >
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </CandleWrapper>
  )
}

export default Candle;
