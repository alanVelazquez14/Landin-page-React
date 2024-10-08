import styled from "styled-components";

export const NosotrosContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 105px;
  font-family: "Oswald";

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }

  span {
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
    margin-top: -20px;
    padding: 30px;
  }
  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
    h1{
      font-size: 19px;
    }
    p{
      font-size: 15px;
    }
    div{
      margin-top: 12px;
    }
    span{
      font-size: 15px;
    }
  }
`;

export const LinkNosotrosStyled = styled.a`
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  color: inherit;

  &:hover {
    text-decoration-color: violet;
    color: violet;
  }

`;

export const TextContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-bottom: 15px;
  gap: 35px;

  p {
    width: 33%;
  }

  span {
    color: violet;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    p {
      width: 70%;
    }
  }
`;
