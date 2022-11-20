import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import InputStyle from "../../assets/styles/Inputs/InputStyle";
import { PageMain } from "../../assets/styles/Authentication/AuthPageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";
import { PageContainer, PageForm } from "../../assets/styles/BasePageStyle";
import axios from "axios";
import URLS from "../../constants/URLs";
import { ColorRing } from "react-loader-spinner";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function trySignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    if (form.password !== form.confirmPassword) {
      alert("As senhas devem ser iguais.");
      setIsLoading(false);
      return;
    }
    try {
      await axios.post(URLS.signUp, {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      navigate("/sign-in");
    } catch (err) {
      alert(err.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Main height="450px">
        <h1>My Wallet</h1>
        <Form height="75%" width="500px" onSubmit={trySignUp}>
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
            minLength={5}
            name="confirmPassword"
            onChange={handleForm}
            value={form.confirmPassword}
            required
            placeholder="Confirme a senha"
          />
          <Button height={SMALL_HEIGHT} width="100%">
            {isLoading ? (
              <ColorRing
                visible={true}
                height="65"
                width="65"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["white", "white", "white", "white", "white"]}
              />
            ) : (
              "Cadastrar"
            )}
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
