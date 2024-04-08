import { Dispatch, SetStateAction } from "react";
import { TContact } from "../../types/contact";
import ContactItems from "./ContactItems";
import styles from "./ContactList.module.css";

const ContactList = ({
  contacts,
  setContacts,
}: {
  contacts: TContact[];
  setContacts: Dispatch<SetStateAction<TContact[]>>;
}) => {
  console.log(contacts);

  return (
    <div className={styles.container}>
      <h2>contacts list</h2>
      {contacts.length ? (
        <div>
          {contacts.map((contact) => (
            <ContactItems
              contacts={contacts}
              key={contact.id}
              contact={contact}
              setContacts={setContacts}
            />
          ))}
        </div>
      ) : (
        <h3>no contact </h3>
      )}
    </div>
  );
};

export default ContactList;
