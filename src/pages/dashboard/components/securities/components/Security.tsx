import React, { useEffect } from "react";
import { SecurityWrapper } from "./Security.style";
import { useQuery } from "src/common";

type TProps = {
  code: string;
}

const Security: React.FC<TProps> = ({ code }) => {
  const [data, { firstLoading }] = useQuery("http://localhost:3000/economy/stock-trend", {
    query: {
      code
    }
  })
  console.log("pujunhao: ", data);
  useEffect(() => {
    
  }, [])
  return (
    <SecurityWrapper className={firstLoading ? "loading" : ""}>
      {!firstLoading && (
        <div>{JSON.stringify(data)}</div>
      )}
    </SecurityWrapper>
  )
}

export default Security;