import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(35, 49, 141);
  background: linear-gradient(
    90deg,
    rgba(35, 49, 141, 1) 45%,
    rgba(3, 24, 40, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 30%;
  background-color: #000;

  @media screen and (max-width: 850px) {
    width: 95%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
