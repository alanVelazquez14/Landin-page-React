import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  ModalOverlayStyled,
  UsernameStyled,
} from "./ModalUserStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleMenuHidden,
} from "../../../redux/userSlice/userSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(toggleMenuHidden());
    toast.success("Has cerrado sesión correctamente");
    navigate("/login");
  };

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <>
          <ModalOverlayStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleMenuHidden())}
          />
          <ModalContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ duration: 0.5 }}
            key="cart-user"
          >
            <UsernameStyled>{`${currentUser?.nombre}`}</UsernameStyled>
            <HrStyled />
            <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
            <span onClick={handleLogout}>Cerrar Sesión</span>
          </ModalContainerStyled>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
