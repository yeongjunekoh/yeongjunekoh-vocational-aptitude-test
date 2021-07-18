import React, { useState, useCallback, useMemo } from "react";

import "./index.css";

import NameForm from "../../component/form/NameForm";
import BasicButton from "../../component/button/BasicButton";
import SingleChoiceForm from "../../component/form/SingleChoiceForm";

const genderListData = [
  {
    gender: "남성",
    isSelected: false,
  },
  {
    gender: "여성",
    isSelected: false,
  },
];

function MainPage() {
  const [genderLIst, setGenderList] = useState(genderListData);
  const [name, setName] = useState("");

  const verifyCheckedNumber = useMemo(() => {
    return genderLIst.filter((item) => item.isSelected === true).length;
  }, [genderLIst]);
  console.log(genderLIst);

  const handleSelectGender = useCallback(
    (text, isToggled, index) => {
      const shouldBlockCheck = verifyCheckedNumber >= 1;
      const option = { gender: text, isSelected: !isToggled };

      if (shouldBlockCheck && isToggled) {
        setGenderList((prev) => [
          ...prev.slice(0, index),
          { ...option },
          ...prev.slice(index + 1),
        ]);
      }
      if (shouldBlockCheck && !isToggled) {
        setGenderList((prev) => [
          ...prev.slice(0, index).map((item) => {
            return { gender: item.gender, isSelected: !item.gender };
          }),
          { ...option },
          ...prev.slice(index + 1).map((item) => {
            return { gender: item.gender, isSelected: !item.gender };
          }),
        ]);
      }
      if (!shouldBlockCheck && isToggled) {
      }
      if (!shouldBlockCheck && !isToggled) {
        setGenderList((prev) => [
          ...prev.slice(0, index),
          { ...option },
          ...prev.slice(index + 1),
        ]);
      }
    },
    [verifyCheckedNumber]
  );

  const onClickStartButton = useCallback(() => {
    console.log("시작 할게요");
  }, []);

  return (
    <div className="main-page-container">
      <h1>직업 가치관 검사</h1>
      <NameForm />
      <p className="gender-title">성별</p>

      {genderLIst.map((item, idx) => {
        return (
          <SingleChoiceForm
            key={idx}
            index={idx}
            text={item.gender}
            isToggled={item.isSelected}
            onClick={handleSelectGender}
          />
        );
      })}
      <BasicButton
        text="검사 시작"
        onClick={name === "" ? () => {} : onClickStartButton}
      />
    </div>
  );
}

export default MainPage;
