import styled from "styled-components";

export const ContactoContainerStyled = styled.div`
  font-family: "Oswald";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -15px;
    color: #f05d5d;
  }

  @media (max-width: 590px) {
    h1{
      font-size: 20px;
    }
  }
  @media (max-width: 400px) {
   h1{
    font-size: 15px;
   }
   h4{
    font-size: 14px;
   }
  }
`;

