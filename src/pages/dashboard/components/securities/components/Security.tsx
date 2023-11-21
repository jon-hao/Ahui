import React, { useEffect } from "react";
import { SecurityWrapper } from "./Security.style";
import { useQuery } from "src/common";
import Candle from "src/components/candle/Candle";

type TProps = {
  code: string;
}

const Security: React.FC<TProps> = ({ code }) => {
  const [data, { firstLoading }] = useQuery("http://localhost:3000/economy/stock-trend", {
    query: {
      code
    }
  })
  useEffect(() => {

  }, [])
  return (
    <SecurityWrapper className={firstLoading ? "loading" : ""}>
      {!firstLoading && (
        <Candle />
      )}
    </SecurityWrapper>
  )
}

export default Security;