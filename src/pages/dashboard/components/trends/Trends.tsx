import React from "react";
import { TrendsWrapper } from "./Trends.style";
import Trending from "./components/trending/Trending";
import { Geo } from "src/constants/localeEnum";

const Trends: React.FC = () => {
  return (
    <TrendsWrapper>
      {Object.values(Geo).map((geo, key) => (
        <Trending key={key} geo={geo} />
      ))}
    </TrendsWrapper>
  )
}

export default Trends;
