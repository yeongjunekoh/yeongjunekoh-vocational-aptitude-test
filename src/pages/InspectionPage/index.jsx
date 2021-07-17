import React, { useState, useCallback } from "react";

import "../InspectionPage/index.css";
import CurrentStatusOfInspectionCard from "../../component/card/CurrentStatusOfInspectionCard";
import QuestionCard from "../../component/card/QuestionCard";
import BasicButton from "../../component/button/BasicButton";

import { question } from "./dummy";

function InspectionPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const questionData = question;

  const handlePrevPage = useCallback(() => {
    if (pageNumber === 0) {
    } else {
      setPageNumber((prev) => prev - 1);
    }
  }, [pageNumber]);
  const handleNextPage = useCallback(() => {
    if (pageNumber === Math.floor(question.length / 5)) {
    } else {
      setPageNumber((prev) => prev + 1);
    }
  }, [pageNumber]);

  return (
    <div>
      <CurrentStatusOfInspectionCard />
      {questionData
        .slice(pageNumber * 5, (pageNumber + 1) * 5)
        .map((item, idx) => {
          return (
            <div className="question-card-container">
              <QuestionCard
                key={idx}
                index={idx}
                titleText={item.titleText}
                answerLIst={item.answerList}
              />
            </div>
          );
        })}
      <div className="button-container">
        <BasicButton text={"이전"} onClick={handlePrevPage} />
        <BasicButton text={"다음"} onClick={handleNextPage} />
      </div>
    </div>
  );
}

export default InspectionPage;
