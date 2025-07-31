import { Formik, Form, Field } from "formik";
import {
  ErrorMessageStyled,
  FormContainerStyled,
  InputStyled,
  LabelStyled,
  TextAreaStyled,
} from "./FormularioStyled";
import * as Yup from "yup";
import { toast } from "sonner";
import { postContact } from "../../axios/axios-contact";

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
      name: "surname",
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
      type: "text",
      name: "phone",
      placeholder: "Teléfono",
    },
    {
      label: "Comentario",
      component: "textarea",
      name: "message",
      placeholder: "Agregá un comentario o consulta",
    },
  ];

  const phoneRegex = /\d{10}$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    surname: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo requerido"),
    phone: Yup.string()
      .matches(phoneRegex, "Número inválido")
      .required("Campo requerido"),
    message: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
  });

  const sendForm = async (values) => {
    try {
      await postContact({
        name: values.name,
        surname: values.surname,
        email: values.email,
        phone: String(values.phone),
        message: values.message,
      });

      toast.success("Tu mensaje fue enviado correctamente!");
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        sendForm(values);
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
