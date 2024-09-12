import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const NavbarContainerStyled = styled.div`
  width: 95vw;
  height: 100px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  img {
    width: 100px;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  font-size: 25px;

  @media (max-width: 1000px) {
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

export const IconLogoMobile = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    color: aliceblue;
    font-size: 2rem;
  }
`;

export const CartStyled = styled.div`
  cursor: pointer;
`;

export const CartNavStyled = styled.div`
  cursor: pointer;
  font-size: 25px;

  span {
    position: absolute;
    top: 35px;
    right: 70px;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: black;
    background-color: violet;
    font-size: 15px;
  }

  @media (max-width: 1000px) {
    font-size: 25px;
    span {
      top: 35px;
      right: 75px;
    }
  }
`;

export const UserLinkStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-family: "Oswald";

  &:hover {
    opacity: 90%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 40px;
`;
