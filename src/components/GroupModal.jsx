import { useState, useEffect } from "react";
import "./styles/GroupModal.css";

const GroupModal = ({ onClose }) => {
  const [newGroup, setNewGroup] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups && storedGroups.length > 0) {
      setGroups(storedGroups);
    } else {
      // 로컬스토리지에 저장된 그룹이 없으면 defaultGroup 넣음
      const defaultGroups = ["가족", "친구", "직장", "스터디"];
      setGroups(defaultGroups);
      localStorage.setItem("groups", JSON.stringify(defaultGroups));
    }
  }, []);

  useEffect(() => {
    // 그룹 정보가 변경될때마다 로컬스토리지 저장
    if (groups.length > 0) {
      localStorage.setItem("groups", JSON.stringify(groups));
    }
  }, [groups]);

  const addGroup = () => {
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      setNewGroup("");
    }
  };

  const deleteGroup = (group) => {
    setGroups(groups.filter((g) => g !== group));
  };

  return (
    <div className="modal-content">
      <h3>그룹 관리</h3>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            {group}
            <button className="deleteBtn" onClick={() => deleteGroup(group)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newGroup}
        onChange={(e) => setNewGroup(e.target.value)}
        placeholder="새 그룹 이름"
      />
      <button className="addBtn" onClick={addGroup}>
        추가
      </button>
      <button className="closeBtn" onClick={onClose}>
        닫기
      </button>
    </div>
  );
};

export default GroupModal;
