const ListItem = ({ contact, onDelete, onViewDetail }) => {
  return (
    <li className="list-item">
      <div className="list-item-content">
        <h3>{contact.name}</h3>
        <p>전화번호: {contact.phone}</p>
        <p>그룹: {contact.group}</p>
        <p>기록: {contact.memo}</p>
      </div>
      <div className="list-item-btnWrap">
        <button className="detailBtn" onClick={onViewDetail}>
          세부사항
        </button>
        <button className="deleteBtn" onClick={onDelete}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default ListItem;
