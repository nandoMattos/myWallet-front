import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../assets/styles/Inputs/ButtonStyle";
import { RESPONSIVITY_LIMIT } from "../constants/sizes";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button width="90px" height="50px" onClick={() => navigate(-1)}>
      Voltar
    </Button>
  );
}

const Button = styled(ButtonStyle)`
  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    width: 90px;
  }
`;
