import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CandleWrapper } from "./Candle.style";

const rangeData = [
  {
    "day": "05-01",
    "temperature": [
      -1,
      10
    ]
  },
  {
    "day": "05-02",
    "temperature": [
      2,
      15
    ]
  },
  {
    "day": "05-03",
    "temperature": [
      3,
      12
    ]
  },
  {
    "day": "05-04",
    "temperature": [
      4,
      12
    ]
  },
  {
    "day": "05-05",
    "temperature": [
      12,
      16
    ]
  },
  {
    "day": "05-06",
    "temperature": [
      5,
      16
    ]
  },
  {
    "day": "05-07",
    "temperature": [
      3,
      12
    ]
  },
  {
    "day": "05-08",
    "temperature": [
      0,
      8
    ]
  },
  {
    "day": "05-09",
    "temperature": [
      -3,
      5
    ]
  }
]

const Candle: React.FC = () => {
  return (
    <CandleWrapper>
      <ResponsiveContainer className="candle-chart-wrapper">
        <BarChart data={rangeData} >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="temperature" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CandleWrapper>
  )
}

export default Candle;
