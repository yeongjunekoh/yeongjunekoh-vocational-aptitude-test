import React, { useState, useCallback } from "react";

import "./index.css";

import NameForm from "../../component/form/NameForm";
import GenderForm from "../../component/form/GenderForm/index";
import BasicButton from "../../component/button/BasicButton";

function MainPage() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return (
    <div className="container">
      <h1>직업 가치관 검사</h1>
      <NameForm />
      <p className="title">성별</p>

      <GenderForm text={"남성"} isToggled={!isToggled} onClick={toggleButton} />
      <GenderForm text={"여성"} isToggled={isToggled} onClick={toggleButton} />

      <BasicButton text="검사 시작" />
    </div>
  );
}

export default MainPage;
