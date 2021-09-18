import Header from "./components/Header";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/Basket" component={Basket} />
      </Switch>
    </div>
  );
}

export default connect(null)(App);
