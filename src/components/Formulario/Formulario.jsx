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
import emailjs from "emailjs-com";

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

  const sendEmail = (values) => {
    const serviceID = "default_service";
    const templateID = "template_1xewyns";
    const userID = "5hPI17DL6NyCBEjgF";

    const templateParams = {
      from_name: values.name,
      name: values.name,
      apellido: values.apellido,
      email: values.email,
      telefono: values.telefono,
      comentario: values.comentario,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log(response.status, response.text);
        toast.success("El formulario ha sido enviado correctamente!");
      },
      (error) => {
        console.log(error);
        toast.error("Hubo un error al enviar el formulario.");
      }
    );
  };

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
        sendEmail(values);
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
