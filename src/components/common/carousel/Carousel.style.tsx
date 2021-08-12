import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  .carousel-sources {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-source-image {
      width: 100%;
      height: 100%;
    }
    .carousel-source-description {
      position: absolute;
      bottom: 8px;
      left: 8px;
    }
  }
`;
