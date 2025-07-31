import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #131415;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 500px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 8px 0 0 8px;
  padding: 25px;
  a {
    cursor: pointer;
    &:hover {
      opacity: 50%;
    }
  }
  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 50%;
    }
  }

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 550px) {
    width: 300px;
  }

  @media (max-width: 425px) {
    width: 200px;
  }
`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 97;
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
