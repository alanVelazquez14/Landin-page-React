import { useDispatch } from "react-redux";
import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
  TextStyled,
} from "./CardProductCheckoutStyled";
import { BsPlusLg } from "react-icons/bs";
import Increase from "../UI/Increase/Increase";
import Count from "../UI/Count/Count";
import { IoMdTrash } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { addToCart, removeFromCart } from "../../redux/cartSlice/cartSlice";

const CardProductCheckout = ({
  id,
  img,
  nombre,
  precio,
  quantity,
  descripcion,
}) => {
  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img src={img} alt={nombre} />
      <CardInfoStyled>
        <ProductTitleStyled>{nombre}</ProductTitleStyled>
        <TextStyled>{descripcion}</TextStyled>
        <PriceStyled>$ {precio}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase bgColor="red" onClick={() => dispatch(removeFromCart(id))}>
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(
              addToCart({ id, img, nombre, precio, quantity, descripcion })
            )
          }
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
