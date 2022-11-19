import styled from "styled-components";

export default function RevenueItem({ type, description, value, date }) {
  return (
    <Item>
      <DivDescription>
        <SpanDate>{date}</SpanDate>
        <SpanDescription>{description}</SpanDescription>
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
  height: 40px;
  font-size: 20px;
`;

const DivDescription = styled.div``;

const SpanDate = styled.span`
  color: lightgray;
  margin-right: 10px;
`;

const SpanDescription = styled.span``;

const DivValue = styled.div`
  color: ${({ type }) => type};
  font-size: 25px;
`;
