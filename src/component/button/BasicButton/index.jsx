import React from "react";

import "./index.css";

function BasicButton({ text, onClick }) {
  return (
    <div className="container">
      <button className="button-style" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default BasicButton;
