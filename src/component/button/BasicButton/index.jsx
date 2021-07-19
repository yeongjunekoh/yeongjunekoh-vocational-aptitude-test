import React from "react";

import "./index.css";

function BasicButton({ text, onClick }) {
  return (
    <div>
      <button className="button-style" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default BasicButton;
