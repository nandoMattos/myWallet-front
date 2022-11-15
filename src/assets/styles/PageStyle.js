import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const PageMain = styled.main`
  h1 {
    font-family: "Saira Stencil One", cursive;
    color: white;
    font-size: 32px;
    text-align: center;
  }
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
`;
