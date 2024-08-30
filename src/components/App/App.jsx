import React from "react";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../LayOut";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/selectors";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = lazy(() => import("../../pages/Homepage/HomePage"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

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

export default App;
