import { useState } from "react";
import * as s from "./NavbarStyles";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartIcon } from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/userSlice/userSlice";
import ModalUser from "./ModalUser/ModalUser";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const ChangeClick = () => {
    setClick(!click);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleUserClick = () => {
    if (currentUser) {
      dispatch(toggleMenuHidden());
    } else {
      navigate("/register");
    }
  };

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
  ];

  return (
    <s.NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <img src="img/Productos/logo.png" alt="Logo"></img>
      </div>

      <div onClick={ChangeClick}>
        <s.IconLogoMobile>{click ? <FaTimes /> : <FaBars />}</s.IconLogoMobile>
      </div>
      <s.LinksContainerStyled click={click}>
        {Links.map((x) => (
          <Link key={x.name} to={x.href} onClick={x.onClick}>
            <s.LinkStyled>
              <motion.div whileTap={{ scale: 0.97 }}>{x.name}</motion.div>
            </s.LinkStyled>
          </Link>
        ))}

        <s.LinkStyled onClick={handleUserClick}>
          <motion.div whileTap={{ scale: 0.97 }}>
            {currentUser ? `${currentUser.nombre}` : "Inicia Sesión"}
          </motion.div>
        </s.LinkStyled>

        <s.CartNavStyled>
          <CartIcon />
        </s.CartNavStyled>
      </s.LinksContainerStyled>
    </s.NavbarContainerStyled>
  );
};

export default Navbar;
