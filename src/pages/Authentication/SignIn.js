import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import InputStyle from "../../assets/styles/Inputs/InputStyle";
import { PageMain } from "../../assets/styles/Authentication/AuthPageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";
import { PageContainer, PageForm } from "../../assets/styles/BasePageStyle";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function tryLogin(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Main height="300px">
        <h1>My Wallet</h1>
        <Form onSubmit={tryLogin} height="65%" width="500px">
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
          <Button height={SMALL_HEIGHT} width="100%">
            Entrar
          </Button>
        </Form>

        <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
      </Main>
    </Container>
  );
}

const Container = styled(PageContainer)``;
const Main = styled(PageMain)``;
const Form = styled(PageForm)``;
const Input = styled(InputStyle)``;
const Button = styled(ButtonStyle)``;
