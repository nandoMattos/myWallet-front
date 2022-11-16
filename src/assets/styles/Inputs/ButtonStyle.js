import styled from "styled-components";
import { MAIN_COLOR_LIGHTER } from "../../../constants/colors";
import { RESPONSIVITY_LIMIT } from "../../../constants/sizes";

const ButtonStyle = styled.button`
  background-color: ${MAIN_COLOR_LIGHTER};
  border: none;
  border-radius: 5px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: white;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    width: 100%;
  }
`;

export default ButtonStyle;
