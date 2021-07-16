import React from "react";
import "./index.css";

function NameForm() {
  return (
    <>
      <p className="title">이름</p>
      <input className="input" defaultValue={"이름을 입력하세요"}></input>
    </>
  );
}

export default NameForm;
