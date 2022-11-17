import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import {
  PageContainer,
  PageHeader,
  PageMain,
} from "../../assets/styles/BasePageStyle";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import URLS from "../../constants/URLs";

export default function Home() {
  const [username, setUsername] = useState("");

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(auth);

  useEffect(() => {
    async function verifyToken(config) {
      try {
        const res = await axios.get(URLS.revenue, config);
        setUsername(res.data.name);
      } catch (err) {
        console.log(err);
        navigate("/sign-in");
      }
    }

    if (!auth) {
      return navigate("/sign-in");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    verifyToken(config);

    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header>
        <h1>Olá, {username}</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </Header>

      <Main>
        <DivRecords></DivRecords>
        <DivButtons>
          <ButtonNew as={Link} to="/income" height="130px" width="230px">
            <ion-icon name="add-circle-outline"></ion-icon>
            <span>Nova entrada</span>
          </ButtonNew>
          <ButtonNew as={Link} to="/expenses" height="130px" width="230px">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>Nova saída</span>
          </ButtonNew>
        </DivButtons>
      </Main>
    </Container>
  );
}

const Container = styled(PageContainer)``;

const Header = styled(PageHeader)`
  ion-icon {
    font-size: 50px;
  }
`;

const Main = styled(PageMain)``;

const DivRecords = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
`;

const ButtonNew = styled(ButtonStyle)`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 13px;
  span {
    width: fit-content;
    font-size: 25px;
    text-align: center;
  }
  ion-icon {
    font-size: 50px;
  }
`;
