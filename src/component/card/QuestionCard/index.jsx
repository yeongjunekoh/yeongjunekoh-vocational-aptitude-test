import React, { useState, useCallback, useMemo } from "react";

import "./index.css";
import SingleChoiceForm from "../../form/SingleChoiceForm";

function QuestionCard({ answerLIst, titleText }) {
  const [answerOption, setAnswerOption] = useState([...answerLIst]);
  const verifyCheckedNumber = useMemo(() => {
    return answerOption.filter((item) => item.isSelected === true).length;
  }, [answerOption]);

  const updateOption = useCallback(
    (text, isToggled, index) => {
      const option = { answerText: text, isSelected: !isToggled };

      if (verifyCheckedNumber >= 1 && isToggled) {
        setAnswerOption((prev) => [
          ...prev.slice(0, index),
          { ...option },
          ...prev.slice(index + 1),
        ]);
      }
      if (verifyCheckedNumber < 1 && !isToggled) {
        setAnswerOption((prev) => [
          ...prev.slice(0, index),
          { ...option },
          ...prev.slice(index + 1),
        ]);
      }
      if (verifyCheckedNumber >= 1 && !isToggled) {
        setAnswerOption((prev) => [
          ...prev.slice(0, index).map((item) => {
            if (item.isSelected === true)
              return { answerText: item.answerText, isSelected: false };
            else return { answerText: item.answerText, isSelected: false };
          }),
          { ...option },
          ...prev.slice(index + 1).map((item) => {
            if (item.isSelected === true)
              return { answerText: item.answerText, isSelected: false };
            else return { answerText: item.answerText, isSelected: false };
          }),
        ]);
      }
      if (verifyCheckedNumber < 1 && isToggled) {
      }
    },
    [verifyCheckedNumber]
  );

  return (
    <div className="question-container">
      <div className="title-text">{titleText}</div>
      <div className="answer-list">
        {answerOption.map((item, idx) => {
          return (
            <SingleChoiceForm
              key={idx}
              text={item.answerText}
              isToggled={item.isSelected}
              onClick={updateOption}
              index={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
