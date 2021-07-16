import React from "react";
import "./index.css";

function GenderForm({ text, isToggled, onClick }) {
  return (
    <div className="container">
      <button className="button" onClick={onClick}>
        <div className="circle">
          {isToggled ? <div className="inner-circle" /> : <></>}
        </div>
        <div>{text}</div>
      </button>
    </div>
  );
}

export default GenderForm;
