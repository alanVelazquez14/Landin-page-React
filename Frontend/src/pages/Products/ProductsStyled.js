import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";
`;

export const TitleProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    color: #f05d5d;
    margin-top: -20px;
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 620px) {
    gap: 10px;
  }

  @media (max-width: 520px) {
    gap: 5px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 70%;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  gap: 12px;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 390px) {
   gap: 7px;
   width: 100%;
  }
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 15px;

  button {
    font-size: 15px;
    width: 120px;
    height: 50px;
  }

  @media (max-width: 875px) {
    button {
      font-size: 10px;
      width: 90px;
      height: 50px;
    }
  }

  @media (max-width: 620px) {
    button {
      font-size: 8px;
      padding: 8px;
      width: 90px;
      height: 50px;
    }
  }

  @media (max-width: 520px) {
    button {
      width: 70px;
      height: 40px;
      padding: 5px 8px;
      font-size: 9px;
    }

    span {
      font-size: 10px;
    }
  }
`;
