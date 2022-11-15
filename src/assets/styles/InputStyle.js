import styled from "styled-components";

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
`;

export default InputStyle;
