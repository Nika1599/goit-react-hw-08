import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Username</label>
        <Field type="text" name="name" id="name" className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" className={css.input} />
        <ErrorMessage name="email" component="span" className={css.error} />

        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.input}
        />
        <ErrorMessage name="password" component="span" className={css.error} />

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
