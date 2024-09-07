import styled from "styled-components";

export const ContainerCheckout = styled.div`
  display: flex;
`;

export const TitleStyled = styled.div`
  color: #f05d5d;
  font-family: "Oswald";
  font-size: 40px;
  margin-top: 25px;
`;

export const CheckoutContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Oswald";

`;

export const InputCheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 15px 20px;
    font-size: 20px;
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
      margin: 0;
    }
  }
`;

export const LabelCheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  font-size: 20px;
`;

export const ErrorCheckoutMessageStyled = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  button {
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #f05d5d;
    color: white;
    text-transform: uppercase;
    font-family: "Oswald";
    margin-top: 15px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      opacity: 45%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
