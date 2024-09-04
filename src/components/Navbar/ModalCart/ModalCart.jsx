import React from "react";
import { toggleHiddenCart } from "../../../redux/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  MainContainerStyled,
  ProductsWrapperStyled,
  TitleStyled,
} from "./ModalCartStyled";
import { MdOutlineClose } from "react-icons/md";
import { ModalOverlayStyled } from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
// import {ModalCartCard} from "./ModalCartCard"

const ModalCart = () => {
  const { cartItems, shippingCost, hidden } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
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
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
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
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
