import React, { useCallback } from "react";

import "./index.css";

function EndingPage() {
  const onClickButton = useCallback(() => {}, []);

  return (
    <div className="ending-page-container">
      <h1>{"검사가 완료되었습니다."}</h1>
      <h4>
        {
          "검사결과는 여러분이 직업을 선택할 때 상대적으로 어떻나 가치를 중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다."
        }
      </h4>
      <button className="button-style" onClick={onClickButton}>
        {"결과 보기"}
      </button>
    </div>
  );
}

export default EndingPage;
