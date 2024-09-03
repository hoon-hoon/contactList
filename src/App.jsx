import "./App.css";
import DetailModal from "./components/DetailModal";
import InputCon from "./components/InputCon";
import ListCon from "./components/ListCon";
import { useState } from "react";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleViewDetail = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };
  return (
    <div className="app">
      <h1>연락처 리스트</h1>
      <div className="main-content">
        <div className="left-area">
          <div className="inputSection">
            <InputCon />
          </div>
          <div className="modal-area">
            {selectedContact && (
              <DetailModal
                contact={selectedContact}
                onClose={handleCloseModal}
              />
            )}
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
