import React, { useEffect } from "react";
import {
  ButtonContainer,
  ErrorRegisterMessageStyled,
  InputRegisterStyled,
  LabelRegisterStyled,
  RegisterContainerStyled,
  PStyled,
  TitleStyled,
} from "./RegisterStyled";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { createUser } from "../../axios/axios-user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice/userSlice";
import useRedirect from "../../hooks/useRedirect";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  useRedirect("/");

  const Inputs = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
      placeholder: "Nombre",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Correo Electrónico",
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      placeholder: "Contraseña",
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo requerido"),
  });

  return (
    <>
      <TitleStyled>
        <h1>- CREÁ TU CUENTA -</h1>
      </TitleStyled>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );

          actions.resetForm();
          if (user) {
            toast.success("Te registraste correctamente");
            dispatch(setCurrentUser({ ...user.usuario }));
          }
        }}
      >
        {({ errors, touched }) => (
          <RegisterContainerStyled>
            <Form>
              {Inputs.map((input, index) => (
                <InputRegisterStyled key={index}>
                  <LabelRegisterStyled>{input.label}</LabelRegisterStyled>
                  <Field
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                  {touched[input.name] && errors[input.name] && (
                    <ErrorRegisterMessageStyled>
                      {errors[input.name]}
                    </ErrorRegisterMessageStyled>
                  )}
                </InputRegisterStyled>
              ))}{" "}
              <PStyled>
                ¿Ya tenes cuenta?
                <Link to="/login">
                  <span> Inicia sesión!</span>
                </Link>
              </PStyled>
              <ButtonContainer>
                <button type="submit">Registrarse</button>
              </ButtonContainer>
            </Form>
          </RegisterContainerStyled>
        )}
      </Formik>
    </>
  );
};

export default Register;
