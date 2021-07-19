import React, { useCallback, useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

import "../InspectionPage/index.css";
import CurrentStatusOfInspectionCard from "../../component/card/CurrentStatusOfInspectionCard";
import QuestionCard from "../../component/card/QuestionCard";
import BasicButton from "../../component/button/BasicButton";
import { getData } from "../../modules/questionData";

function InspectionPage({ location, history }) {
  const pageNumber = Number(queryString.parse(location.search).page);
  const nextPage = pageNumber + 1;
  const prevPage = pageNumber - 1;
  const [questionList, setQuestionList] = useState([]);

  const shouldCheckCurrentStatus = Math.floor(
    (((pageNumber - 1) * 5) / Math.floor((questionList.length / 10 + 1) * 10)) *
      100
  );

  useEffect(() => {
    getData.then((Response) => {
      setQuestionList(
        Response.data.RESULT.slice((pageNumber - 1) * 5, pageNumber * 5).map(
          (item) => {
            const answerLIst = [
              { answerText: item.answer01, isSelected: false },
              { answerText: item.answer02, isSelected: false },
              { answerText: item.answer03, isSelected: false },
              { answerText: item.answer04, isSelected: false },
              { answerText: item.answer05, isSelected: false },
              { answerText: item.answer06, isSelected: false },
              { answerText: item.answer07, isSelected: false },
              { answerText: item.answer08, isSelected: false },
              { answerText: item.answer09, isSelected: false },
              { answerText: item.answer10, isSelected: false },
            ].filter((item) => item.answerText !== null);

            const verifyAnswerLength = Math.floor(answerLIst.length / 2);

            return {
              question: item.question,
              questionNumber: item.qitemNo,
              answerList: answerLIst.slice(0, verifyAnswerLength),
            };
          }
        )
      );
    });
  }, [pageNumber]);

  const updateQuestionList = useCallback(
    (question, questionNumber, answerList) => {
      const option = {
        question: question,
        questionNumber: questionNumber,
        answerList: answerList,
      };
      setQuestionList((prev) => [
        ...prev.slice(0, questionNumber - 1),
        option,
        ...prev.slice(questionNumber),
      ]);
    },
    [questionList]
  );

  console.log("값", questionList);

  const handlePrevPage = useCallback(() => {
    if (prevPage <= 0) {
      history.push("/main-page");
    } else {
      history.push(`/inspection-page?page=${prevPage}`);
    }
  }, [prevPage]);

  const handleNextPage = useCallback(() => {
    if (pageNumber === Math.floor(questionList.length / 5)) {
      history.push("/ending-page");
    } else {
      history.push(`/inspection-page?page=${nextPage}`);
    }
  }, [nextPage]);

  return (
    <div>
      <CurrentStatusOfInspectionCard
        shouldCheckCurrentStatus={shouldCheckCurrentStatus}
      />
      {questionList.map((item) => {
        return (
          <div className="question-card-container">
            <QuestionCard
              key={item.questionNumber}
              titleText={item.question}
              answerLIst={item.answerList}
              questionNumber={item.questionNumber}
              updateQuestionList={updateQuestionList}
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
