import React from "react";

import "./index.css";

function CurrentStatusOfInspectionCard({ shouldCheckCurrentStatus }) {
  const width = `${shouldCheckCurrentStatus}%`;

  return (
    <div className="container">
      <div className="title-container">
        <p>검사진행</p>
        <p>{width}</p>
      </div>
      <div className="total-status-bar">
        <div className="current-status-bar" style={{ width: width }}></div>
      </div>
    </div>
  );
}

export default CurrentStatusOfInspectionCard;
