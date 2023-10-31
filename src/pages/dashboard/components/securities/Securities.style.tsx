import { TypographyToken, typographyHelp } from "src/common";
import { styled } from "styled-components";

export const SecuritiesWrapper = styled.section``;

export const SecuritiesTitle = styled.h3`
  ${typographyHelp(TypographyToken.Tab)};
  margin-bottom: 1.5rem;
`;

export const SecuritiesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  height: 21.5rem;
`;