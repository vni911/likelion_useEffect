import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const headingStyle = "text-2xl font-bold mb-4";
  const inputStyle = "border border-gray-300 rounded px-3 py-2 w-50 mb-4";
  const greetingStyle = "text-lg text-blue-600 font-medium";
  const nameStyle = "text-orange-600";

  return (
    <div>
      <h2 className={headingStyle}>이름을 입력하세요</h2>
      <input type="text" onChange={handleChange} className={inputStyle} />
      <p className={greetingStyle}>
        안녕하세요, <span className={nameStyle}>{name}</span>님!
      </p>
    </div>
  );
}

export default NameInput;
