import { TContact } from "../../types/contact";

const ContactItems = ({ name, email, phone }: TContact) => {
  return (
    <ul>
      <li>🗿 {name}</li>
      <li>📧 {email}</li>
      <li>📞 {phone}</li>
      <li className="remove">🗑️</li>
    </ul>
  );
};

export default ContactItems;
