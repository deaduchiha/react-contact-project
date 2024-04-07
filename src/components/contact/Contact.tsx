import { ChangeEvent, useState } from "react";
import { TContact } from "../../types/contact";

const Contact = () => {
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
    console.log(contact);
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
    </div>
  );
};

export default Contact;
