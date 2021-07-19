import React, { useCallback, useState, useEffect, useMemo } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../InspectionPage/index.css";
import CurrentStatusOfInspectionCard from "../../component/card/CurrentStatusOfInspectionCard";
import QuestionCard from "../../component/card/QuestionCard";
import BasicButton from "../../component/button/BasicButton";
import {
  getData,
  setQuestionAnswer,
  updateQuestionAnswer,
} from "../../modules/questionAnswer";

function InspectionPage({ location, history }) {
  const pageNumber = Number(queryString.parse(location.search).page);
  const nextPage = pageNumber + 1;
  const prevPage = pageNumber - 1;
  const [questionList, setQuestionList] = useState([]);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState();
  const dispatch = useDispatch();
  const existingData = useSelector((state) => state.questionAnswer);

  console.log(
    "불러올 값(모두)",
    existingData,
    "불러올 값(페이지당 5개)",
    existingData.slice((pageNumber - 1) * 5 + 1, pageNumber * 5 + 1)
  );

  const shouldCheckCurrentStatus = Math.floor(
    (((pageNumber - 1) * 5) / (Math.floor(totalQuestionNumber / 10) + 1)) * 10
  );

  const onSetQuestAnswer = useCallback(
    (data) => dispatch(setQuestionAnswer(data)),
    [dispatch]
  );

  const onUpdateQuestionAnswer = useCallback(
    (data) => dispatch(updateQuestionAnswer(data)),
    [dispatch]
  );

  const shouldSelectFunction = useMemo(() => {
    return (
      existingData.slice((pageNumber - 1) * 5 + 1, pageNumber * 5 + 1)
        .length === 0
    );
  }, [existingData, pageNumber]);

  useEffect(() => {
    shouldSelectFunction
      ? getData.then((Response) => {
          setTotalQuestionNumber(Response.data.RESULT.length);
          setQuestionList(
            Response.data.RESULT.slice(
              (pageNumber - 1) * 5,
              pageNumber * 5
            ).map((item) => {
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
            })
          );
        })
      : setQuestionList(
          existingData.slice((pageNumber - 1) * 5 + 1, pageNumber * 5 + 1)
        );
  }, [pageNumber, existingData]);

  const updateQuestionList = useCallback(
    (question, questionNumber, answerList, index) => {
      const option = {
        question: question,
        questionNumber: questionNumber,
        answerList: answerList,
      };
      setQuestionList((prev) => [
        ...prev.slice(0, index),
        option,
        ...prev.slice(index + 1),
      ]);
    },
    []
  );

  const handlePrevPage = useCallback(() => {
    if (prevPage <= 0) {
      history.push("/main-page");
    } else {
      history.push(`/inspection-page?page=${prevPage}`);
    }
  }, [prevPage]);

  console.log(
    "밖에서 콘솔",
    questionList
      .map((item) => {
        return item.answerList.filter((item) => item.isSelected === true);
      })
      .filter((item) => item.length !== 0),
    "밖에서 콘솔(data값)",
    questionList
  );

  const shouldBlockClickButton = useMemo(() => {
    return (
      questionList
        .map((item) => {
          return item.answerList.filter((item) => item.isSelected === true);
        })
        .filter((item) => item.length !== 0).length === questionList.length
    );
  }, [questionList]);

  console.log("dkzkzkzk", Math.floor(totalQuestionNumber / 5) + 1, pageNumber);

  const handleNextPage = useCallback(() => {
    const findLastPage = pageNumber === Math.floor(totalQuestionNumber / 5) + 1;
    if (findLastPage && shouldBlockClickButton) {
      history.push("/ending-page");
    }
    console.log("막아라", shouldBlockClickButton);
    if (!findLastPage && shouldBlockClickButton) {
      history.push(`/inspection-page?page=${nextPage}`);
      shouldSelectFunction
        ? onSetQuestAnswer(questionList)
        : onUpdateQuestionAnswer(questionList);
    } else {
    }
  }, [
    nextPage,
    shouldBlockClickButton,
    pageNumber,
    shouldSelectFunction,
    questionList,
    history,
  ]);

  return (
    <div>
      <CurrentStatusOfInspectionCard
        shouldCheckCurrentStatus={shouldCheckCurrentStatus}
      />
      {questionList.map((item, idx) => {
        return (
          <div className="question-card-container">
            <QuestionCard
              key={item.questionNumber}
              index={idx}
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
