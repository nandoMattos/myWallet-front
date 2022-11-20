import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../assets/styles/Inputs/ButtonStyle";
import {
  PageContainer,
  PageHeader,
  PageMain,
} from "../../assets/styles/BasePageStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import URLS from "../../constants/URLs";
import RevenueItem from "./RevenueItem";
import { RESPONSIVITY_LIMIT } from "../../constants/sizes";
import { ColorRing } from "react-loader-spinner";

export default function Revenue() {
  const [username, setUsername] = useState("");
  const [revenue, setRevenue] = useState([]);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  function calculateBalance(revenue) {
    let balanceNow = 0;
    for (let item of revenue) {
      if (item.type === "expense") {
        balanceNow -= Number(item.value);
      } else {
        balanceNow += Number(item.value);
      }
    }
    setBalance(balanceNow);
  }

  async function getRevenue(config) {
    try {
      const res = await axios.get(URLS.revenue, config);
      const revenueNow = res.data.userRevenue;
      setRevenue(revenueNow);
      calculateBalance(revenueNow);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      navigate("/sign-in");
    }
  }

  function logOut() {
    const response = window.confirm("Tem certeza que deseja deslogar?");
    if (response) {
      sessionStorage.clear();
      navigate("/sign-in");
    }
  }

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) {
      return navigate("/sign-in");
    }

    setUsername(auth.name);
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    getRevenue(config);

    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header>
        <h1>Olá, {username}</h1>
        <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
      </Header>

      <Main>
        <DivRecords>
          {isLoading ? (
            <MiddleOfScreen>
              <ColorRing
                visible={true}
                height="65"
                width="65"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["gray", "gray", "gray", "gray", "gray"]}
              />
            </MiddleOfScreen>
          ) : revenue.length === 0 ? (
            <MiddleOfScreen>
              Você ainda não inseriu despesas ou ganhos!
            </MiddleOfScreen>
          ) : (
            revenue
              .map((i) => (
                <RevenueItem
                  key={i._id}
                  id={i._id}
                  type={i.type}
                  description={i.description}
                  value={i.value}
                  date={i.date}
                />
              ))
              .reverse()
          )}
        </DivRecords>

        <DivBalance>
          <span>Saldo:</span>{" "}
          <Balance color={balance >= 0 ? "green" : "red"}>
            {balance.toFixed(2).toString().replace(".", ",")}
          </Balance>
        </DivBalance>

        <DivButtons>
          <ButtonNew as={Link} to="/incomes" height="130px" width="230px">
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

const Main = styled(PageMain)`
  height: 80vh;
`;

const MiddleOfScreen = styled.div`
  margin: auto;
  font-size: 25px;
  color: gray;
  width: 60%;
  text-align: center;
`;

const DivRecords = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 70%;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 20px;
  overflow-x: scroll;

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    height: 100%;
  }
`;

const DivBalance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  background-color: white;
  height: 8%;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px 20px;
`;

const Balance = styled.span`
  color: ${({ color }) => color};
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

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    height: 120px;
    width: 230px;
    margin: 0 10px;
  }
`;
