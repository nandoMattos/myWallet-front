import { useState } from "react";
import styled from "styled-components";

export default function RevenueItem({ type, description, value, date }) {
  const [isHovered, setIsHovered] = useState(false);

  function deleteItem() {
    alert(description);
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
        {value.replace(".", ",")}
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

const DivDescription = styled.div``;

const SpanDate = styled.span`
  color: gray;
  margin-right: 10px;
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
