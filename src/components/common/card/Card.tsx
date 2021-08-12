import React, { ReactElement } from "react";
import { CardWrapper } from "./Card.style";

type TCardProps = {
  className?: string;
  image?: ReactElement;
};

const Card: React.FC<TCardProps> = ({ className, image, children }) => {
  return (
    <CardWrapper className={className}>
      {image && <div className="card-image">{image}</div>}
      <div className="card-content">{children}</div>
    </CardWrapper>
  );
};

export default Card;
