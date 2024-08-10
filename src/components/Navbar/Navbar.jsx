import { useState } from "react";
import * as s from "./NavbarStyles";
import { motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <s.NavbarContainerStyled>
      <div>
        <img src="img/logo.png" alt="Logo"></img>
      </div>

      <s.IconLogoMobile onClick={() => ChangeClick()}>
        <motion.div whileTap={{ scale: 0.97 }}>
          {click ? <FaTimes /> : <FaBars />}
        </motion.div>
      </s.IconLogoMobile>

      <s.LinksContainerStyled click={click}>
        <s.HomeContainer>
          <motion.div whileTap={{ scale: 0.97 }}>
            <s.LinksNav onClick={() => ChangeClick()}>
              <s.SpanStyled>HOME</s.SpanStyled>
            </s.LinksNav>
          </motion.div>
        </s.HomeContainer>

        <s.LinksNav onClick={() => ChangeClick()}>
          <motion.div whileTap={{ scale: 0.97 }}>
            <s.SpanStyled>PRODUCTOS</s.SpanStyled>
          </motion.div>
        </s.LinksNav>

        <s.LinksNav onClick={() => ChangeClick()}>
          <motion.div whileTap={{ scale: 0.97 }}>
            <s.SpanStyled>NOSOTROS</s.SpanStyled>
          </motion.div>
        </s.LinksNav>

        <s.LinksNav onClick={() => ChangeClick()}>
          <motion.div whileTap={{ scale: 0.97 }}>
            <s.SpanStyled>INGRESÁ</s.SpanStyled>
          </motion.div>
        </s.LinksNav>
      </s.LinksContainerStyled>
    </s.NavbarContainerStyled>
  );
};

export default Navbar;
