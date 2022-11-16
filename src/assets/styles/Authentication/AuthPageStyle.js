import styled from "styled-components";
import { RESPONSIVITY_LIMIT } from "../../../constants/sizes";

export const PageMain = styled.main`
  h1 {
    font-family: "Saira Stencil One", cursive;
    color: white;
    font-size: 32px;
    text-align: center;
  }
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    width: 100%;
  }
`;
