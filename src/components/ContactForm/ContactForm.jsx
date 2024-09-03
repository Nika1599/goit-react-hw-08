import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  username: "",
  number: "",
};

const FeedbackSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = async (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.number,
    };
    try {
      await dispatch(addContact(newContact)).unwrap();
      toast.success("Contact added successfully!");
      actions.resetForm();
    } catch {
      toast.error("Failed to add contact.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={css.input}
        />
        <ErrorMessage name="username" component="span" className={css.error} />

        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          className={css.input}
        />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
