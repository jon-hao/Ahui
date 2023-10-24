import React from "react";
import { MagnetWrapper } from "./Magnet.style";

type TProps = {
  loading?: boolean;
  children?: any;
}

const Magnet: React.FC<TProps> = ({ loading = false, children }) => {
  return (
    <MagnetWrapper className={loading ? "loading" : ""}>
      {children}
    </MagnetWrapper>
  )
}

export default Magnet;
