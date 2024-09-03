import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import "./styles/ListCon.css";

const ListCon = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  return (
    <div className="list-con">
      <ul>
        {contacts.map((contact, index) => (
          <ListItem key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ListCon;
