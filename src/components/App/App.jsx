import React from "react";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import { Layout } from "../LayOut";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/selectors";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = lazy(() => import("../../pages/Homepage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;

// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

// return (
//   <div>
//     {/* <h1>Phonebook</h1>
//     <ContactForm />
//     <SearchBox />
//     {isLoading && !error && <b>Request in progress...</b>}
//     <ContactList /> */}
//   </div>
// );
