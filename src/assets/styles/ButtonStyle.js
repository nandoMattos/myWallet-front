import styled from "styled-components";
import { MAIN_COLOR_LIGHTER } from "../../constants/colors";

const ButtonStyle = styled.button`
  background-color: ${MAIN_COLOR_LIGHTER};
  border: none;
  border-radius: 5px;
  width: 100%;
  height: ${({ height }) => height};
  color: white;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export default ButtonStyle;
