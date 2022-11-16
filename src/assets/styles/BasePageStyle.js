import styled from "styled-components";
import { RESPONSIVITY_LIMIT } from "../../constants/sizes";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 60px;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
  h1 {
    font-size: 30px;
  }
`;

export const PageMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

export const PageForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  @media (max-width: ${RESPONSIVITY_LIMIT}) {
    width: 100%;
  }
`;
