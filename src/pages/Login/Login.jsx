import React, { useEffect } from "react";
import {
  ButtonContainer,
  ErrorLoginMessageStyled,
  InputLoginStyled,
  LabelLoginStyled,
  LoginContainerStyled,
  PStyled,
  TitleStyled,
} from "./LoginStyled";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { loginUser } from "../../axios/axios-user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice/userSlice";
import useRedirect from "../../hooks/useRedirect";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  useRedirect("/");

  const Inputs = [
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
        <h1>- INICIA SESIÓN -</h1>
      </TitleStyled>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);

          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
            toast.success("Ingresaste correctamente");
          }
        }}
      >
        {({ errors, touched }) => (
          <LoginContainerStyled>
            <Form>
              {Inputs.map((input, index) => (
                <InputLoginStyled key={index}>
                  <LabelLoginStyled>{input.label}</LabelLoginStyled>
                  <Field
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                  {touched[input.name] && errors[input.name] && (
                    <ErrorLoginMessageStyled>
                      {errors[input.name]}
                    </ErrorLoginMessageStyled>
                  )}
                </InputLoginStyled>
              ))}
              <PStyled>
                ¿No tenes cuenta?
                <Link to="/register">
                  <span> Registrate!</span>
                </Link>
              </PStyled>
              <ButtonContainer>
                <button type="submit">Ingresa</button>
              </ButtonContainer>
            </Form>
          </LoginContainerStyled>
        )}
      </Formik>
    </>
  );
};

export default Login;
