import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "styled-components";
import { CardWrapper } from "./Card.style";

type TCardProps = {
  className?: string;
  image?: ReactElement;
};

const Card: React.FC<TCardProps> = ({ className, image, children }) => {
  const { colorMap } = useContext(ThemeContext);

  return (
    <CardWrapper {...colorMap} className={className}>
      {image && <div className="card-image">{image}</div>}
      <div className="card-content">{children}</div>
    </CardWrapper>
  );
};

export default Card;
