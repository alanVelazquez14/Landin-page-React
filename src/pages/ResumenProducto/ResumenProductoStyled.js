import styled from "styled-components";

export const ResumenProductosContainerStyled = styled.section`
  font-family: "Oswald";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1100px;
  gap: 50px;

  img {
    width: 400px;
    border-radius: 12px;
  }
  span {
    color: violet;
    text-decoration: underline;
  }
`;

export const TitleResumenStyled = styled.div`
  font-size: 40px;
  margin-top: 20px;
  color: #f05d5d;
`;

export const DescripcionResuenStyled = styled.div`
  font-size: 20px;
`;

export const IngredientesStyled = styled.div`
  font-size: 15px;
`;

export const PrecioStyled = styled.div`
  font-size: 25px;
  color: #f05d5d;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 25px;

  button {
    padding: 15px 20px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: violet;
    color: white;
    font-size: 20px;
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
