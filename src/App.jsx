import "./App.css";
import DetailModal from "./components/DetailModal";
import InputCon from "./components/InputCon";
import ListCon from "./components/ListCon";
import GroupModal from "./components/GroupModal";
import { useState, useEffect } from "react";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups) {
      setGroups(storedGroups);
    } else {
      const defaultGroups = ["가족", "친구", "직장", "스터디"];
      setGroups(defaultGroups);
      localStorage.setItem("groups", JSON.stringify(defaultGroups));
    }
  }, []);

  const handleViewDetail = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const openGroupModal = () => {
    setIsGroupModalOpen(true);
  };

  const closeGroupModal = () => {
    setIsGroupModalOpen(false);
    const updatedGroups = JSON.parse(localStorage.getItem("groups"));
    setGroups(updatedGroups);
  };

  return (
    <div className="app">
      <h1>연락처 리스트</h1>
      <div className="main-content">
        <div className="left-area">
          <div className="inputSection">
            <InputCon onOpenGroupModal={openGroupModal} groups={groups} />
          </div>
          <div className="modal-area">
            {selectedContact && (
              <DetailModal
                contact={selectedContact}
                onClose={handleCloseModal}
              />
            )}
            {isGroupModalOpen && <GroupModal onClose={closeGroupModal} />}
          </div>
        </div>

        <div className="right-area">
          <ListCon onViewDetail={handleViewDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
