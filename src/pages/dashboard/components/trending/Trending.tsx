import React from "react";
import { DASH, Geo, useQuery } from "src/common";
import dayjs from "dayjs";
import { DATE_FORMAT } from "src/common/constants/dateEnum";
import { FlagIcon, NationalWrapper, TrendingCategory, TrendingDetailsWrapper, TrendingHeat, TrendingKeyword, TrendingWrapper } from "./Trending.style";

type TProps = {
  geo: Geo;
}

const Trending: React.FC<TProps> = ({ geo }) => {
  const [data, loading] = useQuery("http://localhost:3000/trends/realtime", {
    query: {
      geo,
      date: dayjs().format(DATE_FORMAT),
    }
  });
  const trend = data?.trends?.[0] ?? {}

  return (
    <TrendingWrapper className={loading ? "loading" : ""} onClick={() => {
      if (!loading && trend.detail) {
        window.open(trend.detail, '_blank');
      }
    }}>
      {!loading && (
        <>
          <NationalWrapper>
            <FlagIcon src={`src/common/assets/images/flags/${geo}.png`} />
          </NationalWrapper>
          <TrendingDetailsWrapper>
            <TrendingCategory>{"All"}</TrendingCategory>
            <TrendingKeyword>{trend.keyword ?? DASH}</TrendingKeyword>
            <TrendingHeat>{DASH}</TrendingHeat>
          </TrendingDetailsWrapper>
        </>
      )}
    </TrendingWrapper>
  )
}

export default Trending;
