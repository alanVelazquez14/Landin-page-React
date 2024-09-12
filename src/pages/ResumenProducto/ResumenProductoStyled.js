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

  @media (max-width: 1120px) {
    max-width: 900px;

    img{
      width: 250px;
    }
  }
  @media (max-width: 530px) {
    img{
      width: 200px;
    }
  }
`;

export const TitleResumenStyled = styled.div`
  font-size: 40px;
  margin-top: 20px;
  color: #f05d5d;

  @media (max-width: 1120px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const DescripcionResuenStyled = styled.div`
  font-size: 20px;

  @media (max-width: 1120px) {
    max-width: 800px;
    font-size: 15px;
  }

  @media (max-width: 735px) {
    font-size: 15px;
    width: 60%;
  }

  @media (max-width: 530px) {
    font-size: 10px;
    width: 70%;
  }
`;

export const IngredientesStyled = styled.div`
  font-size: 15px;

  @media (max-width: 530px) {
    width: 50%;
  }

  @media (max-width: 530px) {
    font-size: 10px;
    width: 70%;
  }
`;

export const PrecioStyled = styled.div`
  font-size: 25px;
  color: #f05d5d;

  @media (max-width: 1120px) {
    font-size: 20px;
  }
  @media (max-width: 530px) {
    font-size: 15px;
  }
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

  @media (max-width: 1120px) {
    button{
      font-size: 15px;
    }
  }

  @media (max-width: 530px) {
    button{
      font-size: 10px;
    }
  }
`;
