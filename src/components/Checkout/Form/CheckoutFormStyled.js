import styled from "styled-components";

export const ContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";

`;

export const CheckoutContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Oswald";
`;

export const InputCheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  input {
    padding: 20px 25px;
    font-size: 25px;
    border-radius: 8px 8px 0 0;
    border: none;
    background-color: #131415;
    border-bottom: 2px solid white;
    outline: none;
    color: white;
    font-family: "Oswald";
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const ErrorCheckoutMessageStyled = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  button {
    padding: 15px 20px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #f05d5d;
    color: white;
    text-transform: uppercase;
    font-family: "Oswald";
    font-size: 20px;
    cursor: pointer;
    margin-top: 25px;
    &:hover {
      opacity: 45%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
`;


export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

