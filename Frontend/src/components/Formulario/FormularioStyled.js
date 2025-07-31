import styled from "styled-components";

export const FormContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Oswald";
  width: 20%;

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
    cursor: pointer;
    &:hover {
      opacity: 45%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 60%;
    margin-top: 5px;
  }
`;

export const InputStyled = styled.div`
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

  @media (max-width: 590px) {
    input {
      font-size: 15px;
    }
  }

  @media (max-width: 465px) {
    input {
      font-size: 10px;
    }
  }
  @media (max-width: 400px) {
    input {
      font-size: 8px;
    }
  }
`;

export const LabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  font-size: 20px;
`;

export const TextAreaStyled = styled.textarea`
  padding: 15px 20px;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  padding: 8px;
  width: 100%;
  height: 100px;
  resize: none;
  background-color: #131415;
  color: white;
  font-family: "Oswald";
  font-size: 20px;
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 5px;
`;
