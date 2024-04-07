import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { TContact } from "../../types/contact";
import ContactList from "./ContactList";

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

    setContact((contact) => ({ ...contact, [name]: value }));
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
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={contact.name}
          name="name"
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="email"
          value={contact.email}
          name="email"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="phone"
          value={contact.phone}
          name="phone"
          onChange={changeHandler}
        />
        <button onClick={addHandler}>add contact</button>
      </div>
      <ContactList contacts={contacts} />
      <Toaster />
    </div>
  );
};

export default Contact;
