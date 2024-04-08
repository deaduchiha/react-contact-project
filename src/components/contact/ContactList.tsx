import { TContact } from "../../types/contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }: { contacts: TContact[] }) => {
  console.log(contacts);

  return (
    <div className={styles.container}>
      <h2>contacts list</h2>
      {contacts.length ? (
        <div>
          {contacts.map((c) => (
            <ul key={c.name}>
              <li>🗿 {c.name}</li>
              <li>📧 {c.email}</li>
              <li>📞 {c.phone}</li>
            </ul>
          ))}
        </div>
      ) : (
        <h3>no contact </h3>
      )}
    </div>
  );
};

export default ContactList;
