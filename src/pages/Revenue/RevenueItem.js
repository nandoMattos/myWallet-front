import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import URLS from "../../constants/URLs";

export default function RevenueItem({ type, id, description, value, date }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  async function deleteItem() {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) {
      navigate("/sign-in");
    }

    const response = window.confirm(
      `tem certeza que deseja excliur "${description}"?`
    );

    if (response) {
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };

      axios
        .delete(`${URLS.revenue}/${id}`, config, {})
        .then(window.location.reload())
        .catch((err) => {
          console.log(err);
          navigate("/sign-in");
        });
    }
  }

  return (
    <Item
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      bgColor={isHovered ? "lightgray" : "white"}
    >
      <DivDescription>
        <SpanDate>{date}</SpanDate>
        <SpanDescription>{description}</SpanDescription>
        <SpanX display={isHovered ? "inital" : "none"}>
          <ion-icon onClick={deleteItem} name="close-circle-outline"></ion-icon>
        </SpanX>
      </DivDescription>
      <DivValue type={type === "income" ? "green" : "red"}>
        {Number(value).toFixed(2).toString().replace(".", ",")}
      </DivValue>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 50px;
  font-size: 25px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor};
`;

const DivDescription = styled.div`
  /* background-color: red; */
`;

const SpanDate = styled.span`
  color: gray;
  margin-right: 15px;
`;

const SpanDescription = styled.span`
  margin-right: 10px;
`;

const SpanX = styled.span`
  display: ${({ display }) => display};
  position: absolute;
  color: gray;
`;

const DivValue = styled.div`
  color: ${({ type }) => type};
  font-size: 25px;
`;
