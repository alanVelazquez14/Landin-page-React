import styled from "styled-components";

export const NotFoundContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";

  h1{
    font-size: 55px;
  }

  p{
    font-size: 25px;
  }
`;


export const Button = styled.button`
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: violet;
  color: white;
  font-size: 25px;
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
