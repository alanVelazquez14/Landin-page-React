import React, { useEffect } from "react";
import {
  CheckoutContainerStyled,
  ContainerCheckout,
  ErrorCheckoutMessageStyled,
  InputCheckoutStyled,
  LabelCheckoutStyled,
  TitleStyled,
} from "./CheckoutFormStyled";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const CheckoutForm = ({ cartItems }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Inputs = [
    {
      label: "Nombre",
      type: "text",
      id: "name",
      placeholder: "Nombre",
    },
    {
      label: "Teléfono",
      type: "text",
      id: "celular",
      placeholder: "Tu celular",
    },
    {
      label: "Ubicación",
      type: "text",
      id: "ubicacion",
      placeholder: "Ubicación",
    },
    {
      label: "Dirección",
      type: "text",
      id: "direcion",
      placeholder: "Dirección",
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    celular: Yup.string().required("Campo requerido"),
    ubicacion: Yup.string().required("Campo requerido"),
    direccion: Yup.string().required("Campo requerido"),
  });

  return (
    <ContainerCheckout>
      <Formik
        initialValues={{
          name: "",
          celular: "",
          ubicacion: "",
          direccion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          toast.success("Te registraste correctamente");
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <CheckoutContainerStyled>
            <Form>
              <TitleStyled>Tu pedido</TitleStyled>
              {Inputs.map((input, index) => (
                <InputCheckoutStyled key={index}>
                  <LabelCheckoutStyled>{input.label}</LabelCheckoutStyled>
                  <Field
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                  {touched[input.name] && errors[input.name] && (
                    <ErrorCheckoutMessageStyled>
                      {errors[input.name]}
                    </ErrorCheckoutMessageStyled>
                  )}
                </InputCheckoutStyled>
              ))}
              <div>
                <button disabled={!cartItems.length}>Iniciar Pedido</button>
              </div>
            </Form>
          </CheckoutContainerStyled>
        )}
      </Formik>
    </ContainerCheckout>
  );
};

export default CheckoutForm;
