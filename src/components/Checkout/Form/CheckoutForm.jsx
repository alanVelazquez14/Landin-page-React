import React, { useEffect } from "react";
import {
  ButtonContainer,
  CheckoutContainerStyled,
  ContainerCheckout,
  ContainerForm,
  ContainerStyled,
  ErrorCheckoutMessageStyled,
  InputCheckoutStyled,
} from "./CheckoutFormStyled";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { createOrder } from "../../../axios/axios-orders";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cartSlice/cartSlice";

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    celular: Yup.string().required("Campo requerido"),
    ubicacion: Yup.string().required("Campo requerido"),
    direccion: Yup.string().required("Campo requerido"),
  });

  return (
    <ContainerStyled>
      <h1>Ingresá tus datos</h1>
      <ContainerCheckout>
        <Formik
          initialValues={{
            name: "",
            celular: "",
            ubicacion: "",
            direccion: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const orderData = {
              items: cartItems,
              price,
              shippingCost,
              total: price + shippingCost,
              shippingDetails: { ...values },
            };
            try {
              await createOrder(orderData, dispatch, currentUser);
              navigate("/felicitaciones");
              dispatch(clearCart());
            } catch (error) {
              console.log(error);
              toast.error("Error al crear la orden");
            }
          }}
        >
          {({ errors, touched }) => (
            <CheckoutContainerStyled>
              <Form>
                <ContainerForm>
                  <div>
                    <InputCheckoutStyled>
                      <Field type="text" name="name" placeholder="Nombre" />
                      {touched.name && errors.name && (
                        <ErrorCheckoutMessageStyled>
                          {errors.name}
                        </ErrorCheckoutMessageStyled>
                      )}
                    </InputCheckoutStyled>

                    <InputCheckoutStyled>
                      <Field type="text" name="celular" placeholder="Celular" />
                      {touched.celular && errors.celular && (
                        <ErrorCheckoutMessageStyled>
                          {errors.celular}
                        </ErrorCheckoutMessageStyled>
                      )}
                    </InputCheckoutStyled>
                  </div>
                  <div>
                    <InputCheckoutStyled>
                      <Field
                        type="text"
                        name="ubicacion"
                        placeholder="Ubicación"
                      />
                      {touched.ubicacion && errors.ubicacion && (
                        <ErrorCheckoutMessageStyled>
                          {errors.ubicacion}
                        </ErrorCheckoutMessageStyled>
                      )}
                    </InputCheckoutStyled>

                    <InputCheckoutStyled>
                      <Field
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                      />
                      {touched.direccion && errors.direccion && (
                        <ErrorCheckoutMessageStyled>
                          {errors.direccion}
                        </ErrorCheckoutMessageStyled>
                      )}
                    </InputCheckoutStyled>
                  </div>
                </ContainerForm>
                <ButtonContainer>
                  <button type="submit" disabled={!cartItems.length}>
                    Confirmar pedido
                  </button>
                </ButtonContainer>
              </Form>
            </CheckoutContainerStyled>
          )}
        </Formik>
      </ContainerCheckout>
    </ContainerStyled>
  );
};

export default CheckoutForm;
