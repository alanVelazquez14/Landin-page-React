import styled from "styled-components";

export const ProductosContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #242424;
  border-radius: 12px;
  margin-top: 25px;
  width: 350px;
  height: 450px;

  h4 {
    font-size: 20px;
  }

  img {
    height: 260px;
    width: 340px;
    border-radius: 8px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ContainerP = styled.div`
  margin-top: -15px;
`;

export const PrecioStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;

  span {
    color: #f05d5d;
    font-size: 20px;
  }

  button {
    padding: 8px 13px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: violet;
    color: white;
    font-size: 15px;
    font-family: "Oswald";
    cursor: pointer;
    &:hover {
      opacity: 70%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
