import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import { DASH, useQuery } from "src/common";
import dayjs from "dayjs";
import { DATE_FORMAT } from "src/common/constants/dateEnum";
import { FlagIcon, NationalWrapper, TrendingCategory, TrendingDetailsWrapper, TrendingHeat, TrendingKeyword, TrendingWrapper } from "./Trending.style";
import { Geo, TrendsCategory } from "src/constants/localeEnum";

type TProps = {
  geo: Geo;
}

let timer = 0;

const categories = Object.values(TrendsCategory);

const Trending: React.FC<TProps> = ({ geo }) => {
  const categoryIndex = useRef(0)
  const category = categories[categoryIndex.current];
  const [originData, loading] = useQuery("http://localhost:3000/trends/realtime", {
    query: {
      geo,
      date: dayjs().format(DATE_FORMAT),
      category
    }
  });
  const data = useDeferredValue(originData);
  const trend = data?.trends?.[0] ?? {};

  useEffect(() => {
    timer = setInterval(() => {
      categoryIndex.current = (categoryIndex.current + 1) % categories.length
    }, 10000);
    return () => {
      clearInterval(timer);
    }
  })

  return (
    <TrendingWrapper className={loading ? "loading" : ""} onClick={() => {
      if (!loading && trend.detail) {
        window.open(trend.detail, '_blank');
      }
    }}>
      {!loading && (
        <>
          <NationalWrapper>
            <FlagIcon src={`src/assets/images/${geo}.png`} />
          </NationalWrapper>
          <TrendingDetailsWrapper>
            <TrendingCategory>{category}</TrendingCategory>
            <TrendingKeyword>{trend.keyword ?? DASH}</TrendingKeyword>
            <TrendingHeat>{DASH}</TrendingHeat>
          </TrendingDetailsWrapper>
        </>
      )}
    </TrendingWrapper>
  )
}

export default Trending;
