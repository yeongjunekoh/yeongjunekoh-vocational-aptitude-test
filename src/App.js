import "./App.css";
import NameForm from "./component/form/NameForm";
import GenderForm from "./component/form/GenderForm/index";
import { useState, useCallback } from "react";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return (
    <div>
      <NameForm />
      <p className="title">성별</p>

      <GenderForm text={"남성"} isToggled={!isToggled} onClick={toggleButton} />
      <GenderForm text={"여성"} isToggled={isToggled} onClick={toggleButton} />
    </div>
  );
}

export default App;
