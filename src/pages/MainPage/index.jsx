import React, { useState, useCallback } from "react";

import "./index.css";

import NameForm from "../../component/form/NameForm";
import BasicButton from "../../component/button/BasicButton";
import SingleChoiceForm from "../../component/form/SingleChoiceForm";

function MainPage() {
  const [isToggled, setIsToggled] = useState(false);
  const [name, setName] = useState("");

  const toggleButton = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  const onClickStartButton = useCallback(() => {
    console.log("시작 할게요");
  }, []);

  return (
    <div className="container">
      <h1>직업 가치관 검사</h1>
      <NameForm />
      <p className="title">성별</p>

      <SingleChoiceForm
        text={"남성"}
        isToggled={!isToggled}
        onClick={toggleButton}
      />
      <SingleChoiceForm
        text={"여성"}
        isToggled={isToggled}
        onClick={toggleButton}
      />

      <BasicButton
        text="검사 시작"
        onClick={name === "" ? {} : onClickStartButton}
      />
    </div>
  );
}

export default MainPage;
