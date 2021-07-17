import React from "react";
import "../SingleChoiceForm/index.css";

function SingleChoiceForm({ text, isToggled, onClick, index }) {
  return (
    <div className="single-form-container">
      <button
        className="single-button"
        onClick={() => onClick(text, isToggled, index)}
      >
        <div className="circle">
          {isToggled ? <div className="inner-circle" /> : <></>}
        </div>
        <div>{text}</div>
      </button>
    </div>
  );
}

export default SingleChoiceForm;
