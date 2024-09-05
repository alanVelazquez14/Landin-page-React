import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aquamarine;
  border-radius: 12px;
  background-color: #363b40;
  font-family: "Oswald";
  padding: 10px;
  flex: 0 0 600px;
  box-sizing: border-box;
  height: 150px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  h2 {
    font-size: 20px;
    text-align: start;
    margin-top: -8px;
  }

  p {
    text-align: start;
    font-size: 12px;
    margin-top: -5px;
  }

  span {
    font-weight: bold;
    color: white;
  }
`;

export const ContainerCardStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const ContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 7px 13px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: violet;
  color: white;
  font-size: 13px;
  font-family: "Oswald";
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
