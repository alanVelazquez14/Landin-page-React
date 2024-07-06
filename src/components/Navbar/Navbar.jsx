import * as s from "./NavbarStyles";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img
          src="https://www.homeburgerbar.com/sites/default/files/logo.png"
          alt="Logo burguer"
        />
      </a>
      <s.LinksContainer>
        <s.HomeContainer>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="#">
              <s.LinkContainer>
                <FaHamburger />
              </s.LinkContainer>
              Home
            </a>
          </motion.div>
        </s.HomeContainer>

        <s.ProductsNav>
          <s.SpanStyled>Productos</s.SpanStyled>
        </s.ProductsNav>

        <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>Inicia Sesión</s.SpanStyled>
            <FaRegUserCircle />
          </s.UserContainer>
        </s.UserNav>
        <s.MenuContainer>
          <motion.div whileTap={{ scale: 0.95 }}>
            <IoMenu />
          </motion.div>
        </s.MenuContainer>
      </s.LinksContainer>
    </s.HeaderContainer>
  );
};

