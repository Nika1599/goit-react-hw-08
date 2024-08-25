import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
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

  const handleSubmit = (values, actions) => {
    console.log(values);
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" className={css.error} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
