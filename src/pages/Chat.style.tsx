import styled from "styled-components";
import { paletteHelper } from "../common/helpers/styleHelper";
import { PaletteToken } from "../common/constants/styleEnum";

export const ChatWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.ColorActive)};
`;