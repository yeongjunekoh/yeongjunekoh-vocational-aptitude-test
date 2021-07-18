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
  const [text, setText] = useState("");

  const onChangeText = useCallback((value) => {
    setText(value);
  }, []);

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

  const shouldBlockStartButton = useMemo(() => {
    return (
      text === "" ||
      genderLIst.filter((item) => item.isSelected === true).length === 0
    );
  }, [text, genderLIst]);

  const onClickStartButton = useCallback(() => {
    const submitState = {
      text: text,
      gender: genderLIst.filter((item) => item.isSelected === true)[0].gender,
    };
    console.log("시작 할게요");
    console.log(submitState);
  }, [text, genderLIst]);

  return (
    <div className="main-page-container">
      <h1>직업 가치관 검사</h1>
      <NameForm onChangeText={onChangeText} />
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
        onClick={shouldBlockStartButton ? () => {} : onClickStartButton}
      />
    </div>
  );
}

export default MainPage;
