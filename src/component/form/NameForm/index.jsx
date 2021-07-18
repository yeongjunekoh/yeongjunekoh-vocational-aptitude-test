import React from "react";
import "./index.css";

function NameForm({ text, onChangeText }) {
  return (
    <>
      <p className="title">이름</p>
      <input
        type="text"
        className="input"
        placeholder={"이름을 입력하세요"}
        onChange={(event) => onChangeText(event.target.value)}
      ></input>
    </>
  );
}

export default NameForm;
