import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

import styles from "./Contact.module.css";

import { TContact } from "../../types/contact";
import ContactList from "./ContactList";
import { inputs } from "../../constants/inputs";

const Contact = () => {
  const [contacts, setContacts] = useState<TContact[]>([]);
  const [contact, setContact] = useState<TContact>({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value, id: uuidv4() }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.email || !contact.phone) {
      toast.error("please enter your data.", {
        position: "top-left",
      });
      return;
    }

    setContacts((contacts) => [...contacts, contact]); // contacts => prevContacts

    setContact({
      // make contact form empty after added to contacts
      email: "",
      name: "",
      phone: "",
    });
  };

  return (
    <div className={styles.container}>
      <div>
        {inputs.map((i) => (
          <input
            key={i.name}
            type={i.type}
            placeholder={i.placeholder}
            name={i.name}
            value={contact[i.name as keyof TContact]}
            onChange={changeHandler}
          />
        ))}
      </div>
      <button onClick={addHandler}>add contact</button>

      <ContactList contacts={contacts} />

      <Toaster />
    </div>
  );
};

export default Contact;
