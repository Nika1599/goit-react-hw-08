import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };

  return (
    <div className={css.contact}>
      <p className={css.contactName}>
        <FaUser />
        {data.name}
      </p>
      <p className={css.contactNumber}>
        <FaPhoneAlt />
        {data.number}
      </p>
      <button type="button" className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
