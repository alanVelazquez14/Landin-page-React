import { Formik, Form, Field } from "formik";
import React from "react";
import {
  ErrorMessageStyled,
  FormContainerStyled,
  InputStyled,
  LabelStyled,
  TextAreaStyled,
} from "./FormularioStyled";
import * as Yup from "yup";
import { toast } from "sonner";

const Formulario = () => {
  const Inputs = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
      placeholder: "Nombre",
    },
    {
      label: "Apellido",
      type: "text",
      name: "apellido",
      placeholder: "Apellido",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Correo Electrónico",
    },
    {
      label: "Teléfono",
      type: "number",
      name: "telefono",
      placeholder: "Teléfono",
    },
    {
      label: "Comentario",
      component: "textarea",
      name: "comentario",
      placeholder: "Agregá un comentario o consulta",
    },
  ];

  const phoneRegex = /\d{10}$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    apellido: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo requerido"),
    telefono: Yup.string()
      .matches(phoneRegex, "Número inválido")
      .required("Campo requerido"),
    comentario: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        apellido: "",
        email: "",
        telefono: "",
        comentario: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        toast.success("El formulario ha sido enviado correctamente!");
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <FormContainerStyled>
          <Form>
            {Inputs.map((input, index) => (
              <InputStyled key={index}>
                <LabelStyled>{input.label}</LabelStyled>
                {input.component === "textarea" ? (
                  <Field
                    as={TextAreaStyled}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                ) : (
                  <Field
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                )}
                {touched[input.name] && errors[input.name] && (
                  <ErrorMessageStyled>{errors[input.name]}</ErrorMessageStyled>
                )}
              </InputStyled>
            ))}
            <button type="submit">Enviar</button>
          </Form>
        </FormContainerStyled>
      )}
    </Formik>
  );
};

export default Formulario;
