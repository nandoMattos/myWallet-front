import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import InputStyle from "../../assets/styles/Inputs/InputStyle";
import { PageMain } from "../../assets/styles/Authentication/AuthPageStyle";
import { SMALL_HEIGHT } from "../../constants/sizes";
import { PageContainer, PageForm } from "../../assets/styles/BasePageStyle";
import axios from "axios";
import URLS from "../../constants/URLs";
import authContext from "../../contexts/AuthContext";
import { ColorRing } from "react-loader-spinner";

export default function SignIn() {
  const { setAuth } = useContext(authContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  async function tryLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(URLS.signIn, {
        email: form.email,
        password: form.password,
      });
      setAuth({ token: res.data.token, username: res.data.name });
      navigate("/revenue");
    } catch (err) {
      alert(err.response.data.message);
      setIsLoading(false);
    }
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
            minLength={5}
            onChange={handleForm}
            value={form.password}
            required
            placeholder="Senha"
          ></Input>
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
              "Entrar"
            )}
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
