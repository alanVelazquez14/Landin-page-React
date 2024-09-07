import React from "react";
import {
  clearCart,
  toggleHiddenCart,
} from "../../../redux/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  ButtonStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioContainer,
  InfoPrecioContainerStyled,
  MainContainerStyled,
  ProductsWrapperStyled,
  SubtotalContainer,
  TitleStyled,
  TotalContainer,
} from "./ModalCartStyled";
import { MdOutlineClose } from "react-icons/md";
import { ModalOverlayStyled } from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
import Increase from "../../UI/Increase/Increase";
import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ModalCart = () => {
  const { cartItems, shippingCost, hidden } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);

  return (
    <>
      {" "}
      {!hidden && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hidden}
        />
      )}
      <AnimatePresence>
        {!hidden && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled onClick={() => dispatch(toggleHiddenCart())}>
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(clearCart())}
                  bgColor="#f05d5d"
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>CARRITO VACÍO</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <InfoPrecioContainerStyled>
              <div>
                <SubtotalContainer>
                  Subtotal: <div>${totalPrice.toFixed(2)}</div>
                </SubtotalContainer>
                <EnvioContainer>
                  Envio: <div>${shippingCost}</div>
                </EnvioContainer>
              </div>
              <span></span>
              <TotalContainer>
                Total: <div>${(totalPrice + shippingCost).toFixed(2)}</div>
              </TotalContainer>
            </InfoPrecioContainerStyled>

            <ButtonStyled
              onClick={() => {
                navigate("/checkout");
                dispatch(toggleHiddenCart());
              }}
            >
              Iniciar pedido
            </ButtonStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
