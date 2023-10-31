import React from "react";
import { SecuritiesContent, SecuritiesTitle, SecuritiesWrapper } from "./Securities.style";
import Security from "./components/Security";

const securitiesCodes = ["000001", "000002"];

const Securities: React.FC = () => {
  return (
    <SecuritiesWrapper>
      <SecuritiesTitle>Securities</SecuritiesTitle>
      <SecuritiesContent>
        {securitiesCodes.map((code, key) => <Security key={key} code={code} />)}
      </SecuritiesContent>
    </SecuritiesWrapper>
  )
}

export default Securities;