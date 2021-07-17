import React from "react";

import "../InspectionPage/index.css";
import CurrentStatusOfInspectionCard from "../../component/card/CurrentStatusOfInspectionCard";
import QuestionCard from "../../component/card/QuestionCard";

function InspectionPage() {
  const question = [
    {
      titleText: "질문 내용이 들어가는 부분입니다.",
      answerList: [
        { answerText: "선택지 1", isSelected: false },
        { answerText: "선택지 2", isSelected: false },
        { answerText: "선택지 3", isSelected: false },
        { answerText: "선택지 4", isSelected: false },
        { answerText: "선택지 5", isSelected: false },
      ],
    },
  ];

  console.log(question.length);

  return (
    <div className="container">
      <CurrentStatusOfInspectionCard />
      {question.map((item, idx) => {
        return (
          <QuestionCard
            key={idx}
            titleText={item.titleText}
            answerLIst={item.answerList}
          />
        );
      })}
    </div>
  );
}

export default InspectionPage;
