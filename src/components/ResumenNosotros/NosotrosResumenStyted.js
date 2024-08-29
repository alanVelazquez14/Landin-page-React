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
`;
