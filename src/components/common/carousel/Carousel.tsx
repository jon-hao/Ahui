import { map } from "lodash";
import React from "react";
import { CarouselWrapper } from "./Carousel.style";

type TSource = {
  image: string;
  description: string;
};

type TCarouselProps = {
  className?: string;
  imageClassName?: string;
  sources: TSource[];
};

const Carousel: React.FC<TCarouselProps> = ({
  className,
  imageClassName,
  sources,
}) => {
  return (
    <CarouselWrapper className={className}>
      {map(sources, ({ image, description }, key) => (
        <div key={key} className="carousel-sources">
          <img
            className={`carousel-source-image ${imageClassName}`}
            src={image}
          />
          <div className="carousel-source-description">{description}</div>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
