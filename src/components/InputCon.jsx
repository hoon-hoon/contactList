import { useState } from "react";
import InputEl from "./InputEl";
import SelectEl from "./SelectEl";

const InputCon = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("가족");
  const [memo, setMemo] = useState("");
  const [error, setError] = useState("");

  const validateName = (name) => {
    const regExp = /^[가-힣]{2,}$/;
    return regExp.test(name); // test 메서드를 이용하여 판별
  };

  const validatePhone = (phone) => {
    const regExp = /^010-\d{4}-\d{4}$/;
    return regExp.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이름 유효성 검사
    if (!validateName(name)) {
      setError("이름은 한글로 된 두 글자 이상이어야 합니다!");
      return;
    }

    // 전화번호 유효성 검사
    if (!validatePhone(phone)) {
      setError("전화번호는 010-0000-0000 형식이어야 합니다!");
      return;
    }

    setError(""); // 에러 메시지 초기화

    // 기존 로컬스토리지에 새 연락처를 추가
    const newContact = { name, phone, group, memo };
    const existingData = JSON.parse(localStorage.getItem("contacts")) || [];
    localStorage.setItem(
      "contacts",
      JSON.stringify([...existingData, newContact])
    );
    console.log(newContact);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputEl
          label="이름"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputEl
          label="전화번호"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <SelectEl
          label="그룹"
          name="group"
          options={["가족", "친구", "직장", "스터디"]}
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <InputEl
          label="간단한 기록"
          type="text"
          name="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        {error && <p className="errorMsg">{error}</p>}

        <button className="submitBtn" type="submit">저장</button>
      </form>
    </div>
  );
};

export default InputCon;
