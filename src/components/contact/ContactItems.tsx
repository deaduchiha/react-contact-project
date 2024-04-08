import { Dispatch, SetStateAction } from "react";
import { TContact } from "../../types/contact";

const ContactItems = ({
  contact: { name, email, phone, id },
  setContacts,
  contacts,
}: {
  contact: TContact;
  contacts: TContact[];
  setContacts: Dispatch<SetStateAction<TContact[]>>;
}) => {
  const deleteHandler = () => {
    const newContacts = contacts.filter((c) => c.id !== id);
    setContacts(newContacts);
  };

  return (
    <ul>
      <li>🗿 {name}</li>
      <li>📧 {email}</li>
      <li>📞 {phone}</li>
      <li
        style={{ cursor: "pointer" }}
        onClick={deleteHandler}
        className="remove"
      >
        🗑️
      </li>
    </ul>
  );
};

export default ContactItems;
