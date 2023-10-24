import React from "react";
import Magnet from "src/components/magnet/Magnet";
import { TrendingWrapper } from "./Trending.style";
import { useQuery } from "src/common";

const Trending: React.FC = () => {
  const [data, loading] = useQuery("http://localhost:3000/trends/daily", {
    query: {
      country: "US",
      date: "2023-10-25"
    }
  });

  const renderSkeleton = () => {
    return (
      <>
        {Array(6).fill(1).map((_, key) => <Magnet key={key} loading={true} />)}
      </>
    )
  }

  const renderTrending = () => {
    return (
      <>
        {data.trends.slice(0, 6).map((item: any, key: number) => {
          return <Magnet key={key}>{item.title.query}</Magnet>
        })}
      </>
    )
  }

  return (
    <TrendingWrapper>
      {loading && renderSkeleton()}
      {!loading && renderTrending()}
    </TrendingWrapper>
  )
}

export default Trending;
