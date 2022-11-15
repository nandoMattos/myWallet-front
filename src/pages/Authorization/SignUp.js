import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/ButtonStyle";
import InputStyle from "../../assets/styles/InputStyle";
import { PageContainer, PageMain } from "../../assets/styles/PageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";

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

  console.log(form);

  return (
    <Container>
      <Main height="450px">
        <h1>My Wallet</h1>
        <Form>
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
          <Button height={SMALL_HEIGHT}>Cadastrar</Button>
        </Form>

        <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
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
  height: 75%;
  width: 500px;
`;

const Container = styled(PageContainer)``;
const Main = styled(PageMain)``;
const Input = styled(InputStyle)``;
const Button = styled(ButtonStyle)``;
