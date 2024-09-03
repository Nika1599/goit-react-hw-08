import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(data.id)).unwrap();
      toast.success("Contact deleted successfully!");
    } catch {
      toast.error("Failed to delete contact.");
    }
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
