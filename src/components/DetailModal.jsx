import "./styles/DetailModal.css";

const DetailModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="modalWrap">
      <h3>연락처 상세 정보</h3>
      <p>
        <bold>이름 : </bold>
        {contact.name}
      </p>
      <p>
        <bold>전화번호 :</bold> {contact.phone}
      </p>
      <p>
        <bold>그룹 : </bold>
        {contact.group}
      </p>
      <p>
        <bold>메모 :</bold> {contact.memo}
      </p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default DetailModal;
