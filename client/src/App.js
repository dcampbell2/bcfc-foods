import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Home from "./Containers/Home/Home";
import Jamaican from "./Containers/Food/Jamaican";
import Southern from "./Containers/Food/Southern";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/izlandgirls" component={Jamaican} />
        <Route exact path="/reevesbbq" component={Southern} />
      </Switch>
    </Router>
  );
}

export default App;
