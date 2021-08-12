import React, { ReactElement } from "react";
import { CardWrapper } from "./Card.style";

type TCard = {
  className?: string;
  image?: ReactElement;
};

const Card: React.FC<TCard> = ({ className, image, children }) => {
  return (
    <CardWrapper className={className}>
      {image && <div className="card-image">{image}</div>}
      <div className="card-content">{children}</div>
    </CardWrapper>
  );
};

export default Card;
