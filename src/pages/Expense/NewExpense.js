import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageForm,
  PageHeader,
  PageMain,
} from "../../assets/styles/BasePageStyle";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import InputStyle from "../../assets/styles/Inputs/InputStyle";
import GoBackButton from "../../components/GoBackButton";
import URLS from "../../constants/URLs";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function NewExpense() {
  const [form, setForm] = useState({ value: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const auth = JSON.parse(sessionStorage.getItem("auth"));
  useEffect(() => {
    if (!auth) {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function saveExpense(e) {
    e.preventDefault();
    setIsLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    const body = {
      value: form.value,
      description: form.description,
    };

    axios
      .post(URLS.expenses, body, config)
      .then(() => setIsLoading(false))
      .catch(() => navigate("/sign-in"));
  }

  return (
    <Container>
      <Header>
        <h1>Nova Saída</h1>
        <GoBackButton />
      </Header>
      <Main>
        <Form onSubmit={saveExpense} height="200px" width="650px">
          <Input
            type="number"
            value={form.value}
            onChange={handleForm}
            name="value"
            placeholder="Valor"
            max={9999999}
            required
          />
          <Input
            type="text"
            value={form.description}
            onChange={handleForm}
            name="description"
            placeholder="Descrição"
            maxLength={20}
            required
          />
          <Button width="650px" height="50px">
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
              "Salvar"
            )}
          </Button>
        </Form>
      </Main>
    </Container>
  );
}

const Container = styled(PageContainer)``;
const Header = styled(PageHeader)`
  margin-bottom: 50px;
`;
const Main = styled(PageMain)``;
const Form = styled(PageForm)``;
const Input = styled(InputStyle)``;
const Button = styled(ButtonStyle)``;
