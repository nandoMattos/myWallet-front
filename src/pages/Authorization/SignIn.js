import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/ButtonStyle";
import InputStyle from "../../assets/styles/InputStyle";
import { PageContainer, PageMain } from "../../assets/styles/PageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function TryLogin(e) {
    e.preventDefault();

    try {
      await axios.get();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Main height="300px">
        <h1>My Wallet</h1>
        <Form onSubmit={TryLogin}>
          <Input
            type="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            required
            placeholder="E-mail"
          ></Input>
          <Input
            type="password"
            name="password"
            onChange={handleForm}
            value={form.password}
            required
            placeholder="Senha"
          ></Input>
          <Button height={SMALL_HEIGHT}>Entrar</Button>
        </Form>

        <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
      </Main>
    </Container>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  height: 65%;
  width: 500px;
`;

const Container = styled(PageContainer)``;
const Main = styled(PageMain)``;
const Button = styled(ButtonStyle)``;
const Input = styled(InputStyle)``;
