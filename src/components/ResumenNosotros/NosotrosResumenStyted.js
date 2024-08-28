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

  p{
    font-size: 30px;
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
