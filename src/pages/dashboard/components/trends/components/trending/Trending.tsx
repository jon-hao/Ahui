import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import { DASH, useQuery } from "src/common";
import dayjs from "dayjs";
import { DATE_FORMAT } from "src/common/constants/dateEnum";
import { FlagIcon, NationalWrapper, TrendingCategory, TrendingDetailsWrapper, TrendingHeat, TrendingKeyword, TrendingWrapper } from "./Trending.style";
import { Geo, TrendsCategory } from "src/constants/localeEnum";
import { categoryLabels } from "src/constants/domainConstant";

type TProps = {
  geo: Geo;
}

let timer = 0;

const categories = Object.values(TrendsCategory);

const Trending: React.FC<TProps> = ({ geo }) => {
  const categoryIndex = useRef(0);
  const [category, setCategory] = useState(TrendsCategory.All);
  const [data, { fetchData, firstLoading }] = useQuery("http://localhost:3000/trends/realtime", {
    query: {
      geo,
      date: dayjs().format(DATE_FORMAT),
      category
    }
  });
  const trend = data?.trends?.[0] ?? {};

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     categoryIndex.current = (categoryIndex.current + 1) % categories.length
  //     setCategory(categories[categoryIndex.current]);
  //   }, 10000);
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  useEffect(() => {
    fetchData();
  }, [category])

  return (
    <TrendingWrapper className={firstLoading ? "loading" : ""} onClick={() => {
      if (!firstLoading && trend.detail) {
        window.open(trend.detail, '_blank');
      }
    }}>
      {!firstLoading && (
        <>
          <NationalWrapper>
            <FlagIcon src={`src/assets/images/${geo}.png`} />
          </NationalWrapper>
          <TrendingDetailsWrapper>
            <TrendingCategory>{categoryLabels[category]}</TrendingCategory>
            <TrendingKeyword>{trend.keyword?.[0] ?? DASH}</TrendingKeyword>
            <TrendingHeat>{DASH}</TrendingHeat>
          </TrendingDetailsWrapper>
        </>
      )}
    </TrendingWrapper>
  )
}

export default Trending;
