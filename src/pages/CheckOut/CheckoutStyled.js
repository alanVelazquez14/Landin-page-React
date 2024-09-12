import styled from "styled-components";

export const CheckoutContainerStyled = styled.section`
  font-family: "Oswald";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  align-items: flex-start;

  h1 {
    color: #f05d5d;
    font-size: 40px;
    margin-top: 0;
  }


  @media (max-width: 1450px) {
    h1{
      font-size: 25px;
      margin-top: 15px;
    }
    
  }

  @media (max-width: 1235px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 570px) {
    h1{
      font-size: 15px;
    }
  }
`;

