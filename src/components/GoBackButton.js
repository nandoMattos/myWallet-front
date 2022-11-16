import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../assets/styles/Inputs/ButtonStyle";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button width="90px" height="50px" onClick={() => navigate(-1)}>
      Voltar
    </Button>
  );
}

const Button = styled(ButtonStyle)``;
