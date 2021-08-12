import styled from "styled-components";
import { BackgroundColor, Color } from "../constants/style";

export const EntryWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: ${(props) =>
    props.theme ? BackgroundColor.Dark1 : BackgroundColor.Light1};
  color: ${(props) => (props.theme ? Color.DarkTitle : Color.LightTitle)};
  flex: auto;
`;
