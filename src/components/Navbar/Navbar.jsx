import { useState } from "react";
import * as s from "./NavbarStyles";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartIcon } from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";


const Links = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Productos",
    href: "/products",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
  },
  {
    name: "Contáctanos",
    href: "/contactanos",
  },
  {
    name: "Ingresá",
    href: "/login",
  },
];

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const ChangeClick = () => {
    setClick(!click);
  };


  return (
    <s.NavbarContainerStyled>
       <ModalCart />
      <div>
        <img src="img/Productos/logo.png" alt="Logo"></img>
      </div>

      <div onClick={ChangeClick}>
        <s.IconLogoMobile>{click ? <FaTimes /> : <FaBars />}</s.IconLogoMobile>
      </div>
      <s.LinksContainerStyled click={click}>
        {Links.map((x) => (
          <Link key={x.name} to={x.href}>
            <s.LinkStyled>
              <motion.div whileTap={{ scale: 0.97 }}>{x.name}</motion.div>
            </s.LinkStyled>
          </Link>
        ))}

        <s.CartNavStyled>
          <CartIcon />
        </s.CartNavStyled>

      </s.LinksContainerStyled>
    </s.NavbarContainerStyled>
  );
};

export default Navbar;
