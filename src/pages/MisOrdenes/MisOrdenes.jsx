import React, { useEffect } from "react";
import {
  ContainerCardsOrdenes,
  OrdenesContainerStyled,
} from "./MisOrdenesStyled";
import CardsOrdenes from "../../components/CardsOrdenes/CardsOrdenes";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-orders";
import {
  clearError,
  fetchOrdersFail,
} from "../../redux/ordersSlice/ordersSlice";

const MisOrdenes = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { orders, error, loading } = useSelector((state) => state.orders);
  console.log("Token:", currentUser.token);

  useEffect(() => {
    if (currentUser?.token) {
      if (!orders) {
        getOrders(dispatch, currentUser);
      }
      if (error) {
        dispatch(clearError());
      }
    } else {
      dispatch(fetchOrdersFail("El usuario no está autenticado"));
    }
  }, [dispatch, currentUser, orders, error]);

  return (
    <OrdenesContainerStyled>
      <h1>Mis Ordenes</h1>
      <ContainerCardsOrdenes>
        {orders?.length ? (
          orders.map((order) => <CardsOrdenes key={order.id} {...order} />)
        ) : (
          <h2>Hacé tu primer pedido!</h2>
        )}
      </ContainerCardsOrdenes>
    </OrdenesContainerStyled>
  );
};

export default MisOrdenes;
