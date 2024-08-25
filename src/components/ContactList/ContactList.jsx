import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
