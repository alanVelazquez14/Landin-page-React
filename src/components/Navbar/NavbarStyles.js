import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: 100px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: "Oswald";

  @media (max-width: 768px){
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 100px;
    left: ${({click}) => click ? 0 : "-100%"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s all ease-in;
    background-color: #18191a;

  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LinksNav = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1.3rem;
    margin-right: 20px;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
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