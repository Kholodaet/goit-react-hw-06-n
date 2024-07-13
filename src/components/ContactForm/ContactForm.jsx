import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  id: nanoid(),
  name: "",
  number: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .trim(),
  number: yup
    .string()
    .required("Number is required")
    .matches(/^[\d-]+$/, "Number must contain only digits or hyphens")
    .min(3, "Number must be at least 3 characters")
    .max(12, "Number cannot exceed 12 characters"),
});

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          id={nameFieldId}
          name="name"
          className={css.input}
          placeholder="Enter name..."
        />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          className={css.input}
          id={numberFieldId}
          name="number"
          placeholder="Enter phone number..."
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
