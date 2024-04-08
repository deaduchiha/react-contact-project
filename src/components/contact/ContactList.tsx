import { TContact } from "../../types/contact";
import ContactItems from "./ContactItems";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }: { contacts: TContact[] }) => {
  console.log(contacts);

  return (
    <div className={styles.container}>
      <h2>contacts list</h2>
      {contacts.length ? (
        <div>
          {contacts.map((c) => (
            <ContactItems
              email={c.email}
              name={c.name}
              phone={c.phone}
              key={c.id}
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
