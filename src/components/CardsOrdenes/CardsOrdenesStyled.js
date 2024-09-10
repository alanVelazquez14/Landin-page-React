import styled from "styled-components";
import { PiClockBold } from "react-icons/pi";

export const CardsOrdenesContainerStyled = styled.div`
  font-family: "Oswald";
  background: #18191a;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 15px;
  width: 400px;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

export const CardsInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h4 {
    font-size: 25px;
  }

  span {
    font-size: 20px;
    margin-top: -20px;
    color: #f05d5d;
  }
`;

export const LoadStyled = styled(PiClockBold)`
  background-color: #ad9639;
  border-radius: 16px;
  padding: 10px 15px;
  color: black;
`;
