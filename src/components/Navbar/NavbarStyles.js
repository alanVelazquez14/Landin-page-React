import styled from "styled-components";


export const NavbarContainerStyled = styled.div`
  width: 110%;
  height: 100px;
  background-color: #18191a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  
  img {
    width: 100px;
    cursor: pointer;
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  font-size: 25px;

  @media (max-width: 768px) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    justify-content: center;
    transition: 0.5s all ease-in;
    background-color: #18191a;
  }
`;

export const LinkStyled = styled.div`
  color: white;
  font-family: "Oswald";
  cursor: pointer;
  &:hover {
    color: #666464;
  }
`;
export const LinksNav = styled.div`
display: flex;
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1.3rem;
    margin-right: 20px;
  }
`;

export const IconLogoMobile = styled.div `
display: none;

@media (max-width: 768px){
  display: flex;
  color: aliceblue;
  font-size: 2rem;
}
`