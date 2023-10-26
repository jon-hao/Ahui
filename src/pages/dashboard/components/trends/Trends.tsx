import React from "react";
import { TrendsWrapper } from "./Trends.style";
import Trending from "../trending/Trending";
import { Geo } from "src/common";

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
