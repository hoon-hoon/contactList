import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import DetailModal from "./DetailModal";
import "./styles/ListCon.css";

const ListCon = ({ onViewDetail }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  const handleDelete = (index) => {
    const updatedContact = contacts.filter((_, i) => i !== index);
    setContacts(updatedContact);
    localStorage.setItem("contacts", JSON.stringify(updatedContact));
  };

  return (
    <div className="list-con">
      <ul>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            contact={contact}
            onDelete={() => handleDelete(index)}
            onViewDetail={() => onViewDetail(contact)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCon;
