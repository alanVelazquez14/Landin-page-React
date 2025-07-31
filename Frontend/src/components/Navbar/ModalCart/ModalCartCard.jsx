import React from "react";
import {
  CardTitleStyled,
  DescStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
} from "./ModalCartStyled";
import Increase from "../../UI/Increase/Increase";
import Count from "../../UI/Count/Count";
import { addToCart, removeFromCart } from "../../../redux/cartSlice/cartSlice";
import { IoMdTrash } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";

const ModalCartCard = ({ img, nombre, descripcion, precio, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ProductContainerStyled>
        <img src={img} alt={nombre} />
        <TextContainerStyled>
          <CardTitleStyled>{nombre}</CardTitleStyled>
          <DescStyled>{descripcion}</DescStyled>
          <PriceStyled>$ {precio}</PriceStyled>
        </TextContainerStyled>
        <QuantityContainerStyled>
          <Increase
            bgColor="red"
            onClick={() => dispatch(removeFromCart(id))}
          >
            {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
          </Increase>
          <Count>{quantity}</Count>
          <Increase
            onClick={() =>
              dispatch(addToCart({ img, nombre, descripcion, precio, quantity, id }))
            }
          >
            <BsPlusLg />
          </Increase>
        </QuantityContainerStyled>
      </ProductContainerStyled>
    </>
  );
};

export default ModalCartCard;
