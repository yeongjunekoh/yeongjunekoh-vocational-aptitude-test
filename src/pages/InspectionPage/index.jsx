import React, { useCallback } from "react";

import "../InspectionPage/index.css";
import CurrentStatusOfInspectionCard from "../../component/card/CurrentStatusOfInspectionCard";
import QuestionCard from "../../component/card/QuestionCard";
import BasicButton from "../../component/button/BasicButton";
import queryString from "query-string";

import { question } from "./dummy";
import { withRouter } from "react-router-dom";

function InspectionPage({ location, history }) {
  const questionData = question;
  const pageNumber = Number(queryString.parse(location.search).page);
  const nextPage = pageNumber + 1;
  const prevPage = pageNumber - 1;

  console.log(pageNumber, prevPage, nextPage, Math.floor(question.length / 5));

  const handlePrevPage = useCallback(() => {
    if (prevPage <= 0) {
      history.push("/main-page");
    } else {
      history.push(`/inspection-page?page=${prevPage}`);
    }
  }, [prevPage]);

  const handleNextPage = useCallback(() => {
    if (pageNumber === Math.floor(question.length / 5)) {
      history.push("/ending-page");
    } else {
      history.push(`/inspection-page?page=${nextPage}`);
    }
  }, [nextPage]);

  return (
    <div>
      <CurrentStatusOfInspectionCard />
      {questionData
        .slice((pageNumber - 1) * 5, pageNumber * 5)
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

export default withRouter(InspectionPage);
