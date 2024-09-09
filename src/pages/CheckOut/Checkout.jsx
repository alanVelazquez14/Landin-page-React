import React from "react";
import { CheckoutContainerStyled } from "./CheckoutStyled";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import ProductCheckout from "../../components/Checkout/Product/ProductCheckout";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);

  return (
    <CheckoutContainerStyled>
      <CheckoutForm
        cartItems={cartItems}
        shippingCost={shippingCost}
        precio={price}
      />
      <ProductCheckout
        cartItems={cartItems}
        shippingCost={shippingCost}
        precio={price.toFixed(2)}
      />
    </CheckoutContainerStyled>
  );
};

export default Checkout;
