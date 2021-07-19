import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import InspectionPage from "./pages/InspectionPage";
import EndingPage from "./pages/EndingPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/inspection-page" component={InspectionPage} />
        <Route path="/ending-page" component={EndingPage} />
        <Route path="/result-page" component={ResultPage} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
