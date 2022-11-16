import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import InputStyle from "../../assets/styles/Inputs/InputStyle";
import { PageMain } from "../../assets/styles/Authentication/AuthPageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";
import { PageContainer, PageForm } from "../../assets/styles/BasePageStyle";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Container>
      <Main height="450px">
        <h1>My Wallet</h1>
        <Form height="75%" width="500px">
          <Input
            type="text"
            name="name"
            onChange={handleForm}
            value={form.name}
            required
            placeholder="Nome"
          />
          <Input
            type="email"
            name="email"
            onChange={handleForm}
            value={form.email}
            required
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            onChange={handleForm}
            value={form.password}
            required
            placeholder="Senha"
          />
          <Input
            type="password"
            name="confirmPassword"
            onChange={handleForm}
            value={form.confirmPassword}
            required
            placeholder="Confirme a senha"
          />
          <Button height={SMALL_HEIGHT} width="100%">
            Cadastrar
          </Button>
        </Form>

        <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
      </Main>
    </Container>
  );
}
const Form = styled(PageForm)``;
const Container = styled(PageContainer)``;
const Main = styled(PageMain)``;
const Input = styled(InputStyle)``;
const Button = styled(ButtonStyle)``;