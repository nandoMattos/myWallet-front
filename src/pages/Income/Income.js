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

export default function Income() {
  return (
    <Container>
      <Header>
        <h1>Nova entrada</h1>
        <GoBackButton />
      </Header>
      <Main>
        <Form height="200px" width="650px">
          <Input type="number" placeholder="Valor" required />
          <Input type="text" placeholder="Descrição" required />
          <Button width="650px" height="50px">
            Salvar Entrada
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
