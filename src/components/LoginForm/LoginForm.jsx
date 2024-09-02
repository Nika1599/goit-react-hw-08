import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const initialValues = {
  email: "",
  password: "",
};

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LogInSchema}
    >
      <Form className={css.form}>
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
          Log in
        </button>
      </Form>
    </Formik>
  );
};
