import React, { useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import "./index.css";

import { resultDummyData } from "./dummy";
import { deleteData } from "../../modules/questionAnswer";

function ResultPage({ history }) {
  const client = useSelector((state) => state.clientInfo);
  const result = resultDummyData;
  const barData = {
    labels: result.result.map((item) => item.resultCategoryName),
    datasets: [
      {
        label: "항목별 수치",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: result.result.map((item) => item.result),
      },
    ],
  };

  const dispatch = useDispatch();

  const onDeleteData = useCallback(() => dispatch(deleteData()), [dispatch]);

  const onInspectAgain = useCallback(() => {
    onDeleteData();
    history.push("/");
  }, []);

  return (
    <div className="result-container">
      <h1 className="result-title">{"직업가치관 검사 결과표"}</h1>
      <table className="client-info">
        <thead>
          <tr>
            <th className="table-item">{"이름"}</th>
            <th className="table-item">{"성별"}</th>
            <th className="table-item">{"검사일"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-item">{client.name}</td>
            <td className="table-item">{client.gender}</td>
            <td className="table-item">{`${client.date.getYear()}. ${client.date.getMonth()}. ${client.date.getDate()}`}</td>
          </tr>
        </tbody>
      </table>
      <h3>{"직업 가치관 결과"}</h3>
      <Bar data={barData} style={{ maxWidth: 1000 }} options={{}} />
      <button className="button-style" onClick={onInspectAgain}>
        {"다시 검사하기"}
      </button>
    </div>
  );
}

export default withRouter(ResultPage);
