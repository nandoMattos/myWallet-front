import styled from "styled-components";
import { RESPONSIVITY_LIMIT } from "../../../constants/sizes";

const InputStyle = styled.input`
  width: ${({ width }) => width};
  height: 58px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  padding-left: 15px;
  font-weight: 400;
  width: 100%;
  ::placeholder {
    color: #606060;
  }

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    width: 100%;
  }
`;

export default InputStyle;
