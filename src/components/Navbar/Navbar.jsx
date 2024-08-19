import { useState } from "react";
import * as s from "./NavbarStyles";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Links = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Produtos",
    href: "/products",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
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
      <div>
        <img src="img/logo.png" alt="Logo"></img>
      </div>

      
      <div onClick={ChangeClick}>
          <s.IconLogoMobile>
            {click ? <FaTimes /> : <FaBars />}
          </s.IconLogoMobile>
        </div>
      <s.LinksContainerStyled click={click}>
        {Links.map((x) => (
          <Link key={x.name} to={x.href}>
            <s.LinkStyled><motion.div whileTap={{ scale: 0.97 }}>{x.name}</motion.div></s.LinkStyled>
          </Link>
        ))}
      </s.LinksContainerStyled>
    </s.NavbarContainerStyled>
  );
};

export default Navbar;
